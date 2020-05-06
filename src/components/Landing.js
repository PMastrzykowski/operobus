import React from 'react';
import { TimelineLite } from 'greensock';
import { Waypoint } from 'react-waypoint';
import animateScrollTo from 'animated-scroll-to';
import { SocialMediaIconsReact } from 'social-media-icons-react';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      scrollTop: 0,
      URLs: [
        `./logo-color.svg`,
        `./project.jpg`,
        `./why.jpg`,
        `./person-0.jpg`,
        `./person-1.jpg`,
        `./person-2.jpg`,
        `./person-3.jpg`,
      ],
      bottomOffset: '100px',
      topOffset: '100px',
      //Main
      mainBottom: false,
      //Project
      projectSectionTitle: false,
      projectSectionLeft: false,
      projectSectionRight: false,
      projectHorizontalLine: false,
      //Why
      whoSectionTitle: false,
      whySectionLeft: false,
      whySectionRight: false,
      whyHorizontalLine: false,
      //About
      aboutSectionTitle: false,
      aboutSectionContent: false,
      person0visible: false,
      person1visible: false,
      person2visible: false,
      person3visible: false,
      aboutVerticalLine: false,
      //What We Need
      whatWeNeedSectionTitle: false,
      whatWeNeedSectionContentTop: false,
      whatWeNeedSectionContentBottom: false,
      whatWeNeedHorizontalLine: false

    }
    this.enter = new TimelineLite();
  }
  loadImage = (src) => {
    return new Promise((resolve, reject) => {
      let img = new Image()
      img.onload = () => resolve(img.height)
      img.onerror = resolve()
      img.src = src
    })
  }
  onEnter = () => {
    let lineMain1length = this.lineMain1.getTotalLength();
    let lineMain2length = this.lineMain2.getTotalLength();
    let lineMain3length = this.lineMain3.getTotalLength();
    document.body.style.overflow = 'hidden'
    this.state.URLs.forEach(async (url, i) => {
      await this.loadImage(url);
      if (i === this.state.URLs.length - 1) {
        this.enter
          .set(this.lineMain1, { 'stroke-dashoffset': lineMain1length, 'stroke-dasharray': lineMain1length })
          .set(this.lineMain2, { 'stroke-dashoffset': lineMain2length, 'stroke-dasharray': lineMain2length })
          .set(this.lineMain3, { 'stroke-dashoffset': lineMain3length, 'stroke-dasharray': lineMain3length })
          .to(this.loader, 0.6, { opacity: 0 }, 0.6)
          .set(document.body, { 'overflow': 'scroll' })
          .set(this.loader, { 'pointer-events': 'none' })
          .to(this.lineMain1, 1.5, { 'stroke-dashoffset': 0 }, '=-0.1')
          .to(this.lineMain2, 1.5, { 'stroke-dashoffset': 0 }, '=-1.5')
          .to(this.lineMain3, 1.5, { 'stroke-dashoffset': 0 }, '=-1.5')
          .fromTo(this.mainBottom, 1, { 'opacity': 0, y: 50 }, { 'opacity': 1, y: 0 }, '=-1.5')
          .fromTo(this.mainText1, 1, { 'opacity': 0, x: -50 }, { 'opacity': 1, x: 0 }, '=-1')
          .fromTo(this.mainText2, 1, { 'opacity': 0, x: 50 }, { 'opacity': 1, x: 0 }, '=-0.8')
          .fromTo(this.mainText3, 1, { 'opacity': 0, x: -30 }, { 'opacity': 1, x: 0 }, '=-0.8')
          .fromTo(this.mainDonateButton, 1, { 'opacity': 0, x: 30 }, { 'opacity': 1, x: 0 }, '=-0.8')
          .fromTo(this.mainBottomLogo, 0.6, { 'opacity': 0 }, { 'opacity': 1 }, '=-1')
          .fromTo(this.mainScrollWrapper, 0.6, { 'opacity': 0, y: 20 }, { 'opacity': 1, y: 0 }, '=-0.6')
          .fromTo(this.header, 0.6, { 'opacity': 0, y: -20 }, { 'opacity': 1, y: 0 }, '=-0.6')
      }
    })
  }
  componentDidMount = () => {
    window.addEventListener('scroll', (e) => {
      this.setState({
        scrollTop: window.scrollY
      })
    });

    this.onEnter();
  }
  toggleMenu = () => {
    document.body.style.overflow = this.state.isMenuOpen ? 'scroll' : 'hidden';
    this.setState(state => ({
      isMenuOpen: !state.isMenuOpen
    }));
  }
  handleMenuClick = (to) => {
    document.body.style.overflow = 'scroll';
    this.setState({
      isMenuOpen: false
    });
    animateScrollTo(to, {
      speed: 300,
      maxDuration: 500,
      easing: (t) => { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t }
    });
  }
  render = () => {
    return (
      <div id="landing">
        <div id={`loader`} ref={e => this.loader = e}>
          <img src={`./logo-color.svg`} alt={`Logo`} />
        </div>
        <header id={`header`} className={this.state.scrollTop !== 0
          || this.state.isMenuOpen ? 'white' : ''} ref={e => this.header = e}>
          <div className={`header-inner ${this.state.mainBottom ? 'white' : ''} ${this.state.isMenuOpen ? 'open' : ''}`}>
            <div className={`header-inner-left`}>
              <a href="https://www.facebook.com/operobus" rel="noopener noreferrer" target="_blank">
                <button className={`header-button`}>
                  <SocialMediaIconsReact borderStyle="solid" icon="facebook" backgroundColor="transparent" iconColor="#1A1A1A" iconSize="4" roundness="50%" size="40" />
                </button>
              </a>
              <a href="https://www.instagram.com/operobus/" rel="noopener noreferrer" target="_blank">
                <button className={`header-button`}>
                  <SocialMediaIconsReact borderStyle="solid" icon="instagram" backgroundColor="transparent" iconColor="#1A1A1A" iconSize="4" roundness="50%" size="40" />
                </button>
              </a>
              <a href="https://www.youtube.com/channel/UCs0Vn1QiPPw9PG61vzoU1Uw?view_as=subscriber" rel="noopener noreferrer" target="_blank">
                <button className={`header-button`}>
                  <SocialMediaIconsReact borderStyle="solid" icon="youtube-play" backgroundColor="transparent" iconColor="#1A1A1A" iconSize="4" roundness="50%" size="40" />
                </button>
              </a>
            </div>
            <div className={`header-inner-right mobile`}>
              <button className={`header-button`} onClick={this.toggleMenu}>
                <div className="nav-icon">
                  <div />
                </div>
              </button>
            </div>
            <div className={`header-inner-open-mobile`}>
              <button
                className={`header-button`}
                onClick={() => this.handleMenuClick(this.project)}
              >O projekcie</button>
              <button
                className={`header-button`}
                onClick={() => this.handleMenuClick(this.why)}
              >Dlaczego?</button>
              <button
                className={`header-button`}
                onClick={() => this.handleMenuClick(this.about)}
              >O nas</button>
              <button
                className={`header-button`}
                onClick={() => this.handleMenuClick(this.whatWeNeed)}
              >Czego potrzebujemy?</button>
              <button
                className={`header-button`}
                onClick={() => this.handleMenuClick(this.contact)}
              >Kontakt</button>
            </div>
            <div className={`header-inner-right desktop`}>
              <button
                className={`header-button`}
                onClick={() => this.handleMenuClick(this.project)}
              >O projekcie</button>
              <button
                className={`header-button`}
                onClick={() => this.handleMenuClick(this.why)}
              >Dlaczego?</button>
              <button
                className={`header-button`}
                onClick={() => this.handleMenuClick(this.about)}
              >O nas</button>
              <button
                className={`header-button`}
                onClick={() => this.handleMenuClick(this.whatWeNeed)}
              >Czego potrzebujemy?</button>
              <button
                className={`header-button`}
                onClick={() => this.handleMenuClick(this.contact)}
              >Kontakt</button>
            </div>
          </div>
        </header>
        <section id='main'>
          <div className={`main-top`}>
            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1919.997 725.672">
              <g id="Grupo_47" dataname="Grupo 47" transform="translate(-0.055 -0.432)">
                <line id="Línea_16" ref={e => this.lineMain2 = e} dataname="Línea 16" y2="722" transform="translate(960.5 0.5)" fill="none" strokeWidth="1" />
                <path id="Trazado_104" ref={e => this.lineMain1 = e} dataname="Trazado 104" d="M5553,1440.5s0,721.5-895.892,721.5" transform="translate(-4657 -1440)" fill="none" strokeWidth="1" />
                <path id="Trazado_105" ref={e => this.lineMain3 = e} dataname="Trazado 105" d="M4657.107,1440.5s0,721.5,895.892,721.5" transform="translate(-3633 -1440)" fill="none" strokeWidth="1" />
              </g>
            </svg>
            <div className={`main-top-content`}>
              <div className={`main-top-empty`}>
              </div>
              <div className={`main-top-text`}>
                <div className={`header-small`} ref={e => this.mainText1 = e}>A co jeśli to</div>
                <div className={`header-large`} ref={e => this.mainText2 = e}>opera przyjedzie</div>
                <div className={`header-medium`} ref={e => this.mainText3 = e}>do Ciebie?</div>
                <div className={`main-button`}
                  ref={e => this.mainDonateButton = e}
                >
                  <a href="https://zrzutka.pl/4jztdh" rel="noopener noreferrer" target="_blank">
                    <button>Wesprzyj projekt</button>
                  </a>
                </div>
              </div>
              <div className={`main-scroll-wrapper`} ref={e => this.mainScrollWrapper = e}>
                <button
                  onClick={() => animateScrollTo(this.project)}
                  className={`header-button`}>Przewiń w dół</button>
              </div>
            </div>
          </div>
          <Waypoint
            onEnter={() => this.setState({
              mainBottom: true
            })}
            onLeave={() => this.setState({
              mainBottom: false
            })}
          >
            <div className={`main-bottom`} ref={e => this.mainBottom = e}>
              <img src={`./logo-white.svg`} alt={`Logo`} ref={e => this.mainBottomLogo = e} />
            </div>
          </Waypoint>
        </section>
        <section id='project' ref={e => this.project = e}>
          <Waypoint
            bottomOffset={this.state.bottomOffset}
            onEnter={() => this.setState({
              projectSectionTitle: true
            })}
            onLeave={() => this.setState({
              projectSectionTitle: false
            })}
          >
            <div className={`section-title invisible ${this.state.projectSectionTitle ? 'visible' : ''}`} ref={e => this.projectSectionTitle = e}>
              O projekcie
        </div>
          </Waypoint>
          <div className={`section-content`}>
            <Waypoint
              bottomOffset={this.state.bottomOffset}
              onEnter={() => this.setState({
                projectSectionLeft: true
              })}
              onLeave={() => this.setState({
                projectSectionLeft: false
              })}
            >
              <div className={`section-content-left invisible ${this.state.projectSectionLeft ? 'visible' : ''}`} ref={e => this.projectSectionLeft = e}>
                <img src={`./project.jpg`} alt={`O projekcie`} />
              </div>
            </Waypoint>
            <Waypoint
              bottomOffset={this.state.bottomOffset}
              onEnter={() => this.setState({
                projectSectionRight: true
              })}
              onLeave={() => this.setState({
                projectSectionRight: false
              })}
            >
              <div className={`section-content-right text invisible ${this.state.projectSectionRight ? 'visible' : ''}`} ref={e => this.projectSectionRight = e}>
              Projekt OperoBus jest nowatorską i{'\u00A0'}nowoczesną próbą dotarcia z{'\u00A0'}kulturą wysoką do{'\u00A0'}odległych miejsc naszego kraju i{'\u00A0'}lokalnych społeczności, które nie{'\u00A0'}mają sposobności obcowania z{'\u00A0'}pięknem żywej muzyki klasycznej, jej{'\u00A0'}ponadczasowymi wartościami oraz emocjami, które za{'\u00A0'}sobą niesie. Pomysł mobilnej sceny operowej czerpie ze{'\u00A0'}źródeł commedii dell'arte. Podobnie jak wędrowne trupy operowe w XVII{'\u00A0'}w. obieramy za{'\u00A0'}cel dotarcie z{'\u00A0'}królową wszystkich sztuk do{'\u00A0'}miast i{'\u00A0'}miasteczek najodleglejszych zakątków Polski. Wykonywane na{'\u00A0'}żywo, dla{'\u00A0'}zgromadzonej na{'\u00A0'}wolnym powietrzu publiczności, profesjonalne koncerty i{'\u00A0'}spektakle, nie{'\u00A0'}będą wymagały do{'\u00A0'}realizacji żadnego dodatkowego zaplecza. Taki sposób prezentacji sztuki pozwoli szerzyć i{'\u00A0'}popularyzować kulturę, muzykę klasyczną, co{'\u00A0'}jest naszą misją i{'\u00A0'}powołaniem.
          </div>
            </Waypoint>
          </div>
          <Waypoint
            bottomOffset={this.state.bottomOffset}
            onEnter={() => this.setState({
              projectHorizontalLine: true
            })}
            onLeave={() => this.setState({
              projectHorizontalLine: false
            })}
          >
            <div className={`horizontal-line ${this.state.projectHorizontalLine ? 'visible' : ''}`} ref={e => this.projectHorizontalLine = e} />
          </Waypoint>
        </section>
        <section id='why' ref={e => this.why = e}>
          <Waypoint
            bottomOffset={this.state.bottomOffset}
            onEnter={() => this.setState({
              whoSectionTitle: true
            })}
            onLeave={() => this.setState({
              whoSectionTitle: false
            })}
          >
            <div className={`section-title invisible ${this.state.whoSectionTitle ? 'visible' : ''}`} ref={e => this.whoSectionTitle = e}>
              Dlaczego?
        </div>
          </Waypoint>
          <div className={`section-content`}>
            <Waypoint
              bottomOffset={this.state.bottomOffset}
              onEnter={() => this.setState({
                whySectionLeft: true
              })}
              onLeave={() => this.setState({
                whySectionLeft: false
              })}
            >
              <div className={`section-content-left text invisible ${this.state.whySectionLeft ? 'visible' : ''}`} ref={e => this.whySectionLeft = e}>
              W trakcie wielu dotychczasowych tras koncertowych, mieliśmy okazję poznać i{'\u00A0'}zobaczyć urokliwe miejsca, pięknie zrewitalizowane centra, rynki miast i{'\u00A0'}miasteczek. Właśnie one doskonale sprawdzą się jako miejsca do parkowania Operobusa i{'\u00A0'}aranżacji naszej mobilnej sceny. Czyż nie byłoby czymś niesamowitym doświadczenie i{'\u00A0'}przeżycie koncertu lub spektaklu o{'\u00A0'}wysokich walorach artystycznych podczas wieczornego spaceru w{'\u00A0'}urokliwym miejscu?
          </div>
            </Waypoint>
            <Waypoint
              bottomOffset={this.state.bottomOffset}
              onEnter={() => this.setState({
                whySectionRight: true
              })}
              onLeave={() => this.setState({
                whySectionRight: false
              })}
            >
              <div className={`section-content-right invisible ${this.state.whySectionRight ? 'visible' : ''}`} ref={e => this.whySectionRight = e}>
                <img src={`./why.jpg`} alt={`Dlaczego?`} />
              </div>
            </Waypoint>
          </div>
          <Waypoint
            bottomOffset={this.state.bottomOffset}
            onEnter={() => this.setState({
              whyHorizontalLine: true
            })}
            onLeave={() => this.setState({
              whyHorizontalLine: false
            })}
          >
            <div className={`horizontal-line ${this.state.whyHorizontalLine ? 'visible' : ''}`} ref={e => this.whyHorizontalLine = e} />
          </Waypoint>
        </section>
        <section id='about' ref={e => this.about = e}>
          <div className={`section-person`}>
            <div className={`section-person-image`}>
            </div>
            <div className={`section-person-details special`}>
              <Waypoint
                bottomOffset={this.state.bottomOffset}
                onEnter={() => this.setState({
                  aboutSectionTitle: true
                })}
                onLeave={() => this.setState({
                  aboutSectionTitle: false
                })}
              >
                <div className={`section-title invisible ${this.state.aboutSectionTitle ? 'visible' : ''}`} ref={e => this.aboutSectionTitle = e}>
                  O nas
            </div>
              </Waypoint>
              <Waypoint
                bottomOffset={this.state.bottomOffset}
                onEnter={() => this.setState({
                  aboutSectionContent: true
                })}
                onLeave={() => this.setState({
                  aboutSectionContent: false
                })}
              >
                <div className={`section-content invisible ${this.state.aboutSectionContent ? 'visible' : ''}`} ref={e => this.aboutSectionContent = e}>
                Najważniejsi są ludzie. Członkowie zespołu artystycznego Operobusa to{'\u00A0'}młodzi entuzjaści sztuki, kochający świat i{'\u00A0'}ludzi. "Nadając na{'\u00A0'}tych samych falach", doskonale się{'\u00A0'}rozumieją, co bardzo pomaga i{'\u00A0'}sprawdza się nie{'\u00A0'}tylko na{'\u00A0'}scenie, ale{'\u00A0'}także w{'\u00A0'}życiu prywatnym.
            </div>
              </Waypoint>
            </div>
          </div>
          <Waypoint
            bottomOffset={this.state.bottomOffset}
            onEnter={() => this.setState({
              person0visible: true
            })}
            onLeave={() => this.setState({
              person0visible: false
            })}
          >
            <div className={`section-person ${this.state.person0visible ? 'visible' : ''}`}>
              <div className={`section-person-image invisible`} ref={e => this.aboutPerson0image = e}>
                <img src={`./person-0.jpg`} alt={`Paweł Michalczuk`} />
              </div>
              <div className={`section-person-details`}>
                <div className={`section-person-title invisible`} ref={e => this.aboutPerson0title = e}>
                  Paweł Michalczuk
            </div>
                <div className={`section-person-content invisible`} ref={e => this.aboutPerson0content = e}>
                Bas, śpiewak młodego pokolenia, który{'\u00A0'}po{'\u00A0'}starannej edukacji muzycznej z{'\u00A0'}sukcesem wkroczył w{'\u00A0'}zawodowy świat opery. Jako 24 latek ma na{'\u00A0'}swoim koncie debiuty w{'\u00A0'}pierwszoplanowych partiach w{'\u00A0'}Polskiej Operze Królewskiej i{'\u00A0'}Operze Bałtyckiej, a{'\u00A0'}także tournee po{'\u00A0'}Chinach kontynentalnych i{'\u00A0'}liczne koncerty w{'\u00A0'}Polsce i{'\u00A0'}Europie. Od trzech sezonów związany jako solista z{'\u00A0'}programem edukacyjnym Spotkania z{'\u00A0'}Muzyką Filharmonii Narodowej, którego{'\u00A0'}esencją są{'\u00A0'}wyjazdowe trasy koncertowe do{'\u00A0'}miejscowości w{'\u00A0'}północno-wschodnich regionach Polski.
            </div>
              </div>
            </div>
          </Waypoint>
          <Waypoint
            bottomOffset={this.state.bottomOffset}
            onEnter={() => this.setState({
              person1visible: true
            })}
            onLeave={() => this.setState({
              person1visible: false
            })}
          >
            <div className={`section-person ${this.state.person1visible ? 'visible' : ''}`}>
              <div className={`section-person-image invisible`} ref={e => this.aboutPerson1image = e}>
                <img src={`./person-1.jpg`} alt={`Aleksandra Klimczak`} />
              </div>
              <div className={`section-person-details`}>
                <div className={`section-person-title invisible`} ref={e => this.aboutPerson1title = e}>
                  Aleksandra Klimczak
            </div>
                <div className={`section-person-content invisible`} ref={e => this.aboutPerson1content = e}>
                Sopran, prezes Fundacji o.to.ja, która od{'\u00A0'}6 lat z{'\u00A0'}powodzeniem realizuje misję wyprowadzania kultury i{'\u00A0'}sztuki wysokiej z{'\u00A0'}murów instytucji, oper i{'\u00A0'}filharmonii do{'\u00A0'}szerokiej publiczności. Dwukrotna stypendystka Ministra Kultury i{'\u00A0'}Dziedzictwa Narodowego na{'\u00A0'}autorskie projekty; od{'\u00A0'}sześciu lat jako solistka współpracuje z{'\u00A0'}Filharmonią Narodową w{'\u00A0'}ramach programu Spotkań z{'\u00A0'}Muzyką.
            </div>
              </div>
            </div>
          </Waypoint>
          <Waypoint
            bottomOffset={this.state.bottomOffset}
            onEnter={() => this.setState({
              person2visible: true
            })}
            onLeave={() => this.setState({
              person2visible: false
            })}
          >
            <div className={`section-person ${this.state.person2visible ? 'visible' : ''}`}>
              <div className={`section-person-image invisible`} ref={e => this.aboutPerson2image = e}>
                <img src={`./person-2.jpg`} alt={`Maciej Gronek`} />
              </div>
              <div className={`section-person-details`}>
                <div className={`section-person-title invisible`} ref={e => this.aboutPerson2title = e}>
                  Maciej Gronek
            </div>
                <div className={`section-person-content invisible`} ref={e => this.aboutPerson2content = e}>
                Tenor, artysta zespołu wokalnego Polskiej Opery Królewskiej. Od{'\u00A0'}lat współpracuje jako solista z{'\u00A0'}wieloma instytucjami kultury i{'\u00A0'}organizacjami pożytku publicznego, m.in.{'\u00A0'}Operą Bałtycką, Filharmonią Narodową, Radzymińską Orkiestrą Dętą, Małą Operetką Warszawską, Ursynowskim Chórem Juvenis. Na{'\u00A0'}swoim koncie posiada również uczestnictwo w{'\u00A0'}międzynarodowych festiwalach w{'\u00A0'}Bremen i{'\u00A0'}Bad Wildbad.
            </div>
              </div>
            </div>
          </Waypoint>
          <Waypoint
            bottomOffset={this.state.bottomOffset}
            onEnter={() => this.setState({
              person3visible: true
            })}
            onLeave={() => this.setState({
              person3visible: false
            })}
          >
            <div className={`section-person ${this.state.person3visible ? 'visible' : ''}`}>
              <div className={`section-person-image invisible`} ref={e => this.aboutPerson3image = e}>
                <img src={`./person-3.jpg`} alt={`Marcin Piotr Łopacki`} />
              </div>
              <div className={`section-person-details`}>
                <div className={`section-person-title invisible`} ref={e => this.aboutPerson3title = e}>
                  Marcin Piotr Łopacki
            </div>
                <div className={`section-person-content invisible`} ref={e => this.aboutPerson3content = e}>
                Pianista, kompozytor, dyrygent. Doktor sztuk muzycznych. Wykładowca Uniwersytetu Muzycznego Fryderyka Chopina w{'\u00A0'}Warszawie. Laureat licznych konkursów kompozytorskich, działacz organizacji pozarządowych. Prezes fundacji Ensemblage.
            </div>
              </div>
            </div>
          </Waypoint >
          <Waypoint
            bottomOffset={this.state.bottomOffset}
            onEnter={() => this.setState({
              aboutVerticalLine: true
            })}
            onLeave={() => this.setState({
              aboutVerticalLine: false
            })}
          >
            <div className={`vertical-line ${this.state.aboutVerticalLine ? 'visible' : ''}`} ref={e => this.aboutVerticalLine = e}>
              <div className={`vertical-line-inner`} />
            </div>
          </Waypoint>
        </section >
        <section id='what-we-need' ref={e => this.whatWeNeed = e}>
          <Waypoint
            bottomOffset={this.state.bottomOffset}
            onEnter={() => this.setState({
              whatWeNeedSectionTitle: true
            })}
            onLeave={() => this.setState({
              whatWeNeedSectionTitle: false
            })}
          >
            <div className={`section-title invisible ${this.state.whatWeNeedSectionTitle ? 'visible' : ''}`} ref={e => this.whatWeNeedSectionTitle = e}>
              Czego potrzebujemy?
        </div>
          </Waypoint>
          <Waypoint
            bottomOffset={this.state.bottomOffset}
            onEnter={() => this.setState({
              whatWeNeedSectionContentTop: true
            })}
            onLeave={() => this.setState({
              whatWeNeedSectionContentTop: false
            })}
          >
            <div className={`section-content text invisible ${this.state.whatWeNeedSectionContentTop ? 'visible' : ''}`} ref={e => this.whatWeNeedSectionContentTop = e}>
            Prężnie działające instytucje kultury mają do{'\u00A0'}dyspozycji pokaźne budżety i{'\u00A0'}cały sztab administracyjny. Nasz projekt OperoBusa jest kosztochłonny tylko w{'\u00A0'}początkowej fazie realizacji. Największym wyzwaniem finansowym jest zakupienie odpowiedniego samochodu dostawczego, który{'\u00A0'}stanie się bazą naszego przedsięwzięcia. Nie mamy wygórowanych wymagań. Pragniemy, aby był{'\u00A0'}on przede wszystkim bezpieczny, wygodny i{'\u00A0'}ekologiczny. Bardzo istotną kwestią, na{'\u00A0'}której nie{'\u00A0'}możemy oszczędzać, jest nagłośnienie. Aby zapewnić odbiorcom możliwie najlepsze doznania akustyczne, pragniemy, aby sprzęt ten był wysokiej jakości. Nie chodzi nam o{'\u00A0'}pełne nagłośnienie sceniczne, tylko o{'\u00A0'}dobre kolumny aktywne, które będą energooszczędne i{'\u00A0'}łatwe w transporcie. Dla zapewnienia mobilności i{'\u00A0'}organizacyjnej niezależności, potrzebny prąd będziemy musieli magazynować w{'\u00A0'}uprzednio przygotowanym pojeździe. Teatr, to{'\u00A0'}również tworzące nastrój oświetlenie, dlatego nie{'\u00A0'}możemy go pominąć w{'\u00A0'}tym zestawieniu. Ważnym wyzwaniem finansowym będzie zakup stosownych kostiumów oraz prostej, mobilnej scenografii, a{'\u00A0'}także dobrej jakości pianina cyfrowego z{'\u00A0'}ważoną klawiaturą. Tak przygotowani możemy ruszać w{'\u00A0'}stronę zachodzącego słońca i{'\u00A0'}muzycznej, życiowej przygody…
            </div>
          </Waypoint>
          <Waypoint
            bottomOffset={this.state.bottomOffset}
            onEnter={() => this.setState({
              whatWeNeedSectionContentBottom: true
            })}
            onLeave={() => this.setState({
              whatWeNeedSectionContentBottom: false
            })}
          >
            <div className={`section-content donate-button invisible ${this.state.whatWeNeedSectionContentBottom ? 'visible' : ''}`} ref={e => this.whatWeNeedSectionContentBottom = e}>
              <a href="https://zrzutka.pl/4jztdh" rel="noopener noreferrer" target="_blank">
                <button>Wesprzyj projekt</button>
              </a>
            </div>
          </Waypoint>
          <Waypoint
            bottomOffset={this.state.bottomOffset}
            onEnter={() => this.setState({
              whatWeNeedHorizontalLine: true
            })}
            onLeave={() => this.setState({
              whatWeNeedHorizontalLine: false
            })}
          >
            <div className={`horizontal-line ${this.state.whatWeNeedHorizontalLine ? 'visible' : ''}`} ref={e => this.whatWeNeedHorizontalLine = e} />
          </Waypoint>
        </section>
        <section id='contact' ref={e => this.contact = e}>
          <div className={`contact-left`}>
            <div className={`title`}>
              Kontakt
          </div>
            <div className={`phone`}>
              +48 798 670 090
          </div>
            <div className={`email`}>
              operobus@gmail.com
          </div>
            <div className={`social-media`}>
              <a href="https://www.facebook.com/operobus" rel="noopener noreferrer" target="_blank">
                <button className={`header-button`}>
                  <SocialMediaIconsReact borderStyle="solid" icon="facebook" iconColor="#ffffff" backgroundColor="#1A1A1A" iconSize="4" roundness="50%" size="60" />
                </button>
              </a>
              <a href="https://www.instagram.com/operobus/" rel="noopener noreferrer" target="_blank">
                <button className={`header-button`}>
                  <SocialMediaIconsReact borderStyle="solid" icon="instagram" iconColor="#ffffff" backgroundColor="#1A1A1A" iconSize="4" roundness="50%" size="60" />
                </button>
              </a>
              <a href="https://www.youtube.com/channel/UCs0Vn1QiPPw9PG61vzoU1Uw?view_as=subscriber" rel="noopener noreferrer" target="_blank">
                <button className={`header-button`}>
                  <SocialMediaIconsReact borderStyle="solid" rel="noopener noreferrer" icon="youtube-play" iconColor="#ffffff" backgroundColor="#1A1A1A" iconSize="4" roundness="50%" size="60" />
                </button>
              </a>
            </div>
          </div>
          <div className={`contact-right`}>
            <a href="https://www.linkedin.com/in/pmastrzykowski/" rel="noopener noreferrer" target="_blank">
              <div className={`creadores`} />
            </a>
            <img src={`./logo-white.svg`} alt={`Logo`} />
          </div>
        </section>
      </div >
    );
  }
}

export default Landing;