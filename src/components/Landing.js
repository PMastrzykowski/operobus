import React from 'react';

function Landing() {
  return (
    <div id="landing">
      <header id={`header`}>
        <div className={`header-inner`}>
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
        <div className={`mine-top`}>
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1919.997 725.672">
            <g id="Grupo_47" dataname="Grupo 47" transform="translate(-0.055 -0.432)">
              <line id="Línea_16" dataname="Línea 16" y2="722" transform="translate(960.5 0.5)" fill="none" strokeWidth="1" />
              <path id="Trazado_104" dataname="Trazado 104" d="M5553,1440.5s0,721.5-895.892,721.5" transform="translate(-4657 -1440)" fill="none" strokeWidth="1" />
              <path id="Trazado_105" dataname="Trazado 105" d="M4657.107,1440.5s0,721.5,895.892,721.5" transform="translate(-3633 -1440)" fill="none" strokeWidth="1" />
            </g>
          </svg>
          <div className={`mine-top-content`}>
            <div className={`mine-top-empty`}>
            </div>
            <div className={`mine-top-text`}>
              <div className={`header-small`}>A co jeśli to</div>
              <div className={`header-large`}>opera przyjedzie</div>
              <div className={`header-medium`}>do Ciebie?</div>
            </div>
            <div className={`mine-scroll-wrapper`}>
              <button className={`header-button`}>Przewiń w dół</button>
            </div>
          </div>
        </div>
        <div className={`mine-bottom`}>
          <img src={`./logo-white.svg`} alt={`Logo`} />
        </div>
      </section>
      <section id='project'>
        <div className={`section-title`}>
          O projekcie
        </div>
        <div className={`section-content`}>
          <div className={`section-content-left`}>
            <img src={`./project.png`} alt={`O projekcie`} />
          </div>
          <div className={`section-content-right text`}>
            Projekt OperoBus jest nowatorską i nowoczesną próbą dotarcia z kulturą wysoką do miejsc i lokalnych społeczności, które nie mają sposobności do obcowania z pięknem żywej muzyki klasycznej, jej ponadczasowymi wartościami oraz emocjami, które za sobą niesie. Sam pomysł ma swoje korzenie w commedii dell’arte.
            OperoBus będzie mobilną sceną operową, która docierać będzie, podobnie jak pierwsze trupy operowe w XVII w., do najodleglejszych zakątków prowincji, prezentując tam wysokiej próby, na żywo wykonywane koncerty i spektakle operowe, nie potrzebując do tego celu żadnego dodatkowego zaplecza. Będziemy występować na wolnym powietrzu dla zgromadzonej publiczności, szerząc kulturę i sztukę wysoką, co jest naszą misją i powołaniem.
          </div>
        </div>
        <div className={`horizontal-line`} />
      </section>
      <section id='why'>
        <div className={`section-title`}>
          Dlaczego?
        </div>
        <div className={`section-content`}>
          <div className={`section-content-left text`}>
            Podczas wykonywania zawodu śpiewaka operowego, wielokrotnie podróżując przez Polskę doświadczałem mnogości pięknych, zrewitalizowanych i odnowionych skwerów, ryneczków, miejsc, które doskonale sprawdziłyby się jako miejsce do zaparkowania OperoBusa i zamienienia ich w naszą mobilną scenę. Czyż nie byłoby dla Państwa czymś niesamowitym doświadczenie koncertu czy spektaklu na wysokim poziomie artystycznym podczas wieczornego spaceru?
          </div>
          <div className={`section-content-right`}>
            <img src={`./why.png`} alt={`Dlaczego?`} />
          </div>
        </div>
        <div className={`horizontal-line`} />
      </section>
      <section id='about'>
        <div className={`section-person`}>
          <div className={`section-person-image`}>
          </div>
          <div className={`section-person-details special`}>
            <div className={`section-title`}>
              O nas
            </div>
            <div className={`section-content`}>
              Najważniejsi są ludzie. Projekt Operobusa chcemy stworzyć wraz z grupą znakomitych artystów, przyjaciół. Przeżyliśmy razem już wiele zawodowych wyjazdów, koncertów. Prywatnie jesteśmy po prostu zgraną paczką ludzi, którzy zawsze mogą na sobie polegać.
            </div>
          </div>
        </div>
        <div className={`section-person`}>
          <div className={`section-person-image`}>
            <img src={`./person-0.png`} alt={`Paweł Michalczuk`} />
          </div>
          <div className={`section-person-details`}>
            <div className={`section-person-title`}>
              Paweł Michalczuk
            </div>
            <div className={`section-person-content`}>
              bas, śpiewak młodego pokolenia, który z powodzeniem wkroczył w zawodowy świat opery. Jako 24 latek ma na swoim koncie debiuty w pierwszoplanowych partiach w Polskiej Operze Królewskiej czy Operze Bałtyckiej, a także tournee po Chinach kontynentalnych i liczne koncerty w Europie. Od trzech sezonów związany jako solista z programem edukacyjnym Spotkania z Muzyką Filharmonii Narodowej, którego esencją są wyjazdowe trasy koncertowe do mniejszych miejscowości w północno-wschodnich regionach Polski.
            </div>
          </div>
        </div>
        <div className={`section-person`}>
          <div className={`section-person-image`}>
            <img src={`./person-0.png`} alt={`Paweł Michalczuk`} />
          </div>
          <div className={`section-person-details`}>
            <div className={`section-person-title`}>
              Aleksandra Klimczak
            </div>
            <div className={`section-person-content`}>
              sopran, prezes Fundacji o.to.ja, która od 6 lat z powodzeniem realizuje misję wyprowadzania kultury i sztuki wysokiej z murów instytucji, oper i filharmonii do szerokiej publiczności, dwukrotna stypendystka Ministra Kultury i Dziedzictwa Narodowego na autorskie projekty; od sześciu lat jako solistka współpracuje z   Filharmonią Narodową w ramach programu Spotkań z Muzyką.
            </div>
          </div>
        </div>
        <div className={`section-person`}>
          <div className={`section-person-image`}>
            <img src={`./person-0.png`} alt={`Paweł Michalczuk`} />
          </div>
          <div className={`section-person-details`}>
            <div className={`section-person-title`}>
              Maciej Gronek
            </div>
            <div className={`section-person-content`}>
              tenor, artysta zespołu wokalnego Polskiej Opery Królewskiej. Od lat współpracuje jako solista z wieloma instytucjami kultury i organizacjami pożytku publicznego, m.in. Operą Bałtycką, Filharmonią Narodową, Radzymińską Orkiestrą Dętą, Małą Operetką Warszawską, Ursynowskim Chórem Juvenis. Na swoim koncie posiada również czynne uczestnictwo w międzynarodowych festiwalach w Bremen i Bad Wildbad.
            </div>
          </div>
        </div>
        <div className={`section-person`}>
          <div className={`section-person-image`}>
            <img src={`./person-0.png`} alt={`Paweł Michalczuk`} />
          </div>
          <div className={`section-person-details`}>
            <div className={`section-person-title`}>
              Marcin Piotr Łopacki
            </div>
            <div className={`section-person-content`}>
              pianista, kompozytor, dyrygent. Doktor sztuk muzycznych. Wykładowca Uniwersytetu Muzycznego Fryderyka Chopina w Warszawie. Laureat licznych konkursów kompozytorskich, działacz organizacji pozarządowych. Prezes fundacji Ensemblage.
            </div>
          </div>
        </div>
        <div className={`vertical-line`} />
      </section>
      <section id='sponsors'>
        <div className={`section-title`}>
          Sponsorzy
        </div>
        <div className={`section-content`}>
          <div className={`section-content-left`}>
            <img src={`./why.png`} alt={`Dlaczego?`} />
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

export default Landing;
