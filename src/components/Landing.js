import React from 'react';
import { TimelineLite } from 'greensock';
import { Waypoint } from 'react-waypoint';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      URLs: [
        `./logo-color.svg`,
        `./project.png`,
        `./why.png`,
        `./sponsors.png`,
        `./person-0.png`,
        `./person-1.png`,
        `./person-2.png`,
        `./person-3.png`,
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
      aboutVerticalLine: false
    }
    this.enter = new TimelineLite();
  }
  onEnter = () => {
    let lineMain1length = this.lineMain1.getTotalLength();
    let lineMain2length = this.lineMain2.getTotalLength();
    let lineMain3length = this.lineMain3.getTotalLength();
    this.enter
      .set(document.body, { 'overflow': 'hidden' })
      .set(this.lineMain1, { 'stroke-dashoffset': lineMain1length, 'stroke-dasharray': lineMain1length })
      .set(this.lineMain2, { 'stroke-dashoffset': lineMain2length, 'stroke-dasharray': lineMain2length })
      .set(this.lineMain3, { 'stroke-dashoffset': lineMain3length, 'stroke-dasharray': lineMain3length })
      .call(() => {
        this.state.URLs.map((URL) => {
          var img = new Image();
          img.src = URL;
          return img;
        });
      })
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
      .fromTo(this.mainBottomLogo, 0.6, { 'opacity': 0 }, { 'opacity': 1 }, '=-1')
      .fromTo(this.mainScrollWrapper, 0.6, { 'opacity': 0, y: 20 }, { 'opacity': 1, y: 0 }, '=-0.6')
      .fromTo(this.header, 0.6, { 'opacity': 0, y: -20 }, { 'opacity': 1, y: 0 }, '=-0.6')
  }
  componentDidMount = () => {
    this.onEnter();
  }
  render = () => {
    return (
      <div id="landing">
        <div id={`loader`} ref={e => this.loader = e}>
          <img src={`./logo-color.svg`} alt={`Logo`} />
        </div>
        <header id={`header`} ref={e => this.header = e}>
          <div className={`header-inner ${this.state.mainBottom? 'white':''}`}>
            <div className={`header-inner-left`}>
              <button className={`header-button`}></button>
            </div>
            <div className={`header-inner-right`}>
              <button className={`header-button`}>O projekcie</button>
              <button className={`header-button`}>Dlaczego?</button>
              <button className={`header-button`}>O nas</button>
              <button className={`header-button`}>Sponsorzy</button>
              <button className={`header-button`}>Kontakt</button>
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
              </div>
              <div className={`main-scroll-wrapper`} ref={e => this.mainScrollWrapper = e}>
                <button className={`header-button`}>Przewiń w dół</button>
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
        <section id='project'>
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
                <img src={`./project.png`} alt={`O projekcie`} />
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
                Projekt OperoBus jest nowatorską i nowoczesną próbą dotarcia z kulturą wysoką do miejsc i lokalnych społeczności, które nie mają sposobności do obcowania z pięknem żywej muzyki klasycznej, jej ponadczasowymi wartościami oraz emocjami, które za sobą niesie. Sam pomysł ma swoje korzenie w commedii dell’arte.
                OperoBus będzie mobilną sceną operową, która docierać będzie, podobnie jak pierwsze trupy operowe w XVII w., do najodleglejszych zakątków prowincji, prezentując tam wysokiej próby, na żywo wykonywane koncerty i spektakle operowe, nie potrzebując do tego celu żadnego dodatkowego zaplecza. Będziemy występować na wolnym powietrzu dla zgromadzonej publiczności, szerząc kulturę i sztukę wysoką, co jest naszą misją i powołaniem.
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
        <section id='why'>
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
                Podczas wykonywania zawodu śpiewaka operowego, wielokrotnie podróżując przez Polskę doświadczałem mnogości pięknych, zrewitalizowanych i odnowionych skwerów, ryneczków, miejsc, które doskonale sprawdziłyby się jako miejsce do zaparkowania OperoBusa i zamienienia ich w naszą mobilną scenę. Czyż nie byłoby dla Państwa czymś niesamowitym doświadczenie koncertu czy spektaklu na wysokim poziomie artystycznym podczas wieczornego spaceru?
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
                <img src={`./why.png`} alt={`Dlaczego?`} />
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
        <section id='about'>
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
                  Najważniejsi są ludzie. Projekt Operobusa chcemy stworzyć wraz z grupą znakomitych artystów, przyjaciół. Przeżyliśmy razem już wiele zawodowych wyjazdów, koncertów. Prywatnie jesteśmy po prostu zgraną paczką ludzi, którzy zawsze mogą na sobie polegać.
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
                <img src={`./person-0.png`} alt={`Paweł Michalczuk`} />
              </div>
              <div className={`section-person-details`}>
                <div className={`section-person-title invisible`} ref={e => this.aboutPerson0title = e}>
                  Paweł Michalczuk
            </div>
                <div className={`section-person-content invisible`} ref={e => this.aboutPerson0content = e}>
                  bas, śpiewak młodego pokolenia, który z powodzeniem wkroczył w zawodowy świat opery. Jako 24 latek ma na swoim koncie debiuty w pierwszoplanowych partiach w Polskiej Operze Królewskiej czy Operze Bałtyckiej, a także tournee po Chinach kontynentalnych i liczne koncerty w Europie. Od trzech sezonów związany jako solista z programem edukacyjnym Spotkania z Muzyką Filharmonii Narodowej, którego esencją są wyjazdowe trasy koncertowe do mniejszych miejscowości w północno-wschodnich regionach Polski.
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
                <img src={`./person-1.png`} alt={`Aleksandra Klimczak`} />
              </div>
              <div className={`section-person-details`}>
                <div className={`section-person-title invisible`} ref={e => this.aboutPerson1title = e}>
                  Aleksandra Klimczak
            </div>
                <div className={`section-person-content invisible`} ref={e => this.aboutPerson1content = e}>
                  sopran, prezes Fundacji o.to.ja, która od 6 lat z powodzeniem realizuje misję wyprowadzania kultury i sztuki wysokiej z murów instytucji, oper i filharmonii do szerokiej publiczności, dwukrotna stypendystka Ministra Kultury i Dziedzictwa Narodowego na autorskie projekty; od sześciu lat jako solistka współpracuje z   Filharmonią Narodową w ramach programu Spotkań z Muzyką.
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
                <img src={`./person-2.png`} alt={`Maciej Gronek`} />
              </div>
              <div className={`section-person-details`}>
                <div className={`section-person-title invisible`} ref={e => this.aboutPerson2title = e}>
                  Maciej Gronek
            </div>
                <div className={`section-person-content invisible`} ref={e => this.aboutPerson2content = e}>
                  tenor, artysta zespołu wokalnego Polskiej Opery Królewskiej. Od lat współpracuje jako solista z wieloma instytucjami kultury i organizacjami pożytku publicznego, m.in. Operą Bałtycką, Filharmonią Narodową, Radzymińską Orkiestrą Dętą, Małą Operetką Warszawską, Ursynowskim Chórem Juvenis. Na swoim koncie posiada również czynne uczestnictwo w międzynarodowych festiwalach w Bremen i Bad Wildbad.
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
                <img src={`./person-3.png`} alt={`Marcin Piotr Łopacki`} />
              </div>
              <div className={`section-person-details`}>
                <div className={`section-person-title invisible`} ref={e => this.aboutPerson3title = e}>
                  Marcin Piotr Łopacki
            </div>
                <div className={`section-person-content invisible`} ref={e => this.aboutPerson3content = e}>
                  pianista, kompozytor, dyrygent. Doktor sztuk muzycznych. Wykładowca Uniwersytetu Muzycznego Fryderyka Chopina w Warszawie. Laureat licznych konkursów kompozytorskich, działacz organizacji pozarządowych. Prezes fundacji Ensemblage.
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
            <div className={`vertical-line ${this.state.aboutVerticalLine? 'visible':''}`} ref={e => this.aboutVerticalLine = e}>
            <div className={`vertical-line-inner`}/>
              </div>
          </Waypoint>
        </section >
        <section id='sponsors'>
          <div className={`section-title`}>
            Sponsorzy
        </div>
          <div className={`section-content`}>
            <div className={`section-content-left`}>
              <img src={`./sponsors.png`} alt={`Dlaczego?`} />
            </div>
            <div className={`section-content-right text`}>
              Prężnie działające instytucje kultury posiadają całkiem pokaźne budżety. Projekt operobusa jest kosztochłonny tylko początkowo. Największym wyzwaniem finansowym jest zakupienie odpowiedniego samochodu dostawczego, który stanie się bazą naszego przedsięwzięcia. Nie mamy wygórowanych wymagań. Pragniemy aby był on przede wszystkim bezpieczny, wygodny, ekologiczny i w miarę możliwości ekonomiczny. Z podstawowego wyposażenia powinien posiadać klimatyzację oraz radio.
          </div>
          </div>
          <div className={`horizontal-line`} />
        </section>
        <section id='contact'>
          <div className={`contact-left`}>
            <div className={`title`}>
              Kontakt
          </div>
            <div className={`phone`}>
              +48 000 000 000
          </div>
            <div className={`email`}>
              biuro@operobus.pl
          </div>
          </div>
          <div className={`contact-right`}>
            <img src={`./logo-white.svg`} alt={`Logo`} />
          </div>
        </section>
      </div >
    );
  }
}

export default Landing;
