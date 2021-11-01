import '../styles/imprintAndPrivacy.css';
import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import {FiArrowLeft} from 'react-icons/fi';

class Privacy extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="privacy">
                <Container>
                    <Row>
                        <Col xs={1} sm={1} md={2}/>
                        <Col xs={10} sm={10} md={8}>
                            <div className="back-arrow">
                            <Link className="back-arrow" to={"/"}><FiArrowLeft /> Zurück</Link>
                            </div>
                            <div className="headline">
                                <h1>Datenschutzerklärung</h1>
                            </div>
                            <div>
                                <h2>Datenschutz</h2>
                                <p>Wir haben diese Datenschutzerklärung (Fassung 30.09.2019-311118334) verfasst, um
                                    Ihnen gemäß der Vorgaben der Datenschutz-Grundverordnung (EU) 2016/679 zu erklären,
                                    welche Informationen wir sammeln, wie wir Daten verwenden und welche
                                    Entscheidungsmöglichkeiten Sie als Besucher dieser Webseite haben.
                                    Leider liegt es in der Natur der Sache, dass diese Erklärungen sehr technisch
                                    klingen, wir haben uns bei der Erstellung jedoch bemüht die wichtigsten Dinge so
                                    einfach und klar wie möglich zu beschreiben.</p>
                            </div>
                            <div>
                                <h2>Automatische Datenspeicherung</h2>
                                <div>
                                    <p>Wenn Sie heutzutage Webseiten besuchen, werden gewisse Informationen automatisch
                                        erstellt und gespeichert, so auch auf dieser Webseite.
                                        Wenn Sie unsere Webseite so wie jetzt gerade besuchen, speichert unser Webserver
                                        (Computer auf dem diese Webseite gespeichert ist) automatisch Daten wie
                                    </p>
                                    <ul>
                                        <li>die Adresse (URL) der aufgerufenen Webseite</li>
                                        <li>Browser und Browserversion</li>
                                        <li>das verwendete Betriebssystem</li>
                                        <li>die Adresse (URL) der zuvor besuchten Seite (Referrer URL)</li>
                                        <li>den Hostname und die IP-Adresse des Geräts von welchem aus zugegriffen
                                            wird
                                        </li>
                                        <li>Datum und Uhrzeit</li>
                                    </ul>
                                    <p>in Dateien (Webserver-Logfiles).

                                        In der Regel werden Webserver-Logfiles zwei Wochen gespeichert und danach
                                        automatisch gelöscht. Wir geben diese Daten nicht weiter, können jedoch nicht
                                        ausschließen, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten
                                        eingesehen werden.
                                        Die Rechtsgrundlage besteht nach Artikel 6 Absatz 1 f DSGVO (Rechtmäßigkeit der
                                        Verarbeitung) darin, dass berechtigtes Interesse daran besteht, den fehlerfreien
                                        Betrieb dieser Webseite durch das Erfassen von Webserver-Logfiles zu
                                        ermöglichen.</p>
                                </div>
                            </div>
                            <div>
                                <h2>Speicherung persönlicher Daten</h2>
                                <p>Persönliche Daten, die Sie uns auf dieser Website elektronisch übermitteln, wie zum Beispiel Name, E-Mail-Adresse, Adresse oder andere persönlichen Angaben im Rahmen der Übermittlung eines Formulars oder Kommentaren im Blog, werden von uns gemeinsam mit dem Zeitpunkt und der IP-Adresse nur zum jeweils angegebenen Zweck verwendet, sicher verwahrt und nicht an Dritte weitergegeben.

                                    Wir nutzen Ihre persönlichen Daten somit nur für die Kommunikation mit jenen Besuchern, die Kontakt ausdrücklich wünschen und für die Abwicklung der auf dieser Webseite angebotenen Dienstleistungen und Produkte. Wir geben Ihre persönlichen Daten ohne Zustimmung nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten eingesehen werden.

                                    Wenn Sie uns persönliche Daten per E-Mail schicken – somit abseits dieser Webseite – können wir keine sichere Übertragung und den Schutz Ihrer Daten garantieren. Wir empfehlen Ihnen, vertrauliche Daten niemals unverschlüsselt per E-Mail zu übermitteln.

                                    Die Rechtsgrundlage besteht nach Artikel 6  Absatz 1 a DSGVO (Rechtmäßigkeit der Verarbeitung) darin, dass Sie uns die Einwilligung zur Verarbeitung der von Ihnen eingegebenen Daten geben. Sie können diesen Einwilligung jederzeit widerrufen – eine formlose E-Mail reicht aus, Sie finden unsere Kontaktdaten im Impressum.</p>
                            </div>
                            <div>
                                <h2>Rechte laut Datenschutzgrundverordnung</h2>
                                <p>Ihnen stehen laut den Bestimmungen der DSGVO grundsätzlich die folgende Rechte zu:</p>
                                <ul>
                                    <li>Recht auf Berichtigung (Artikel 16 DSGVO)</li>
                                    <li>Recht auf Löschung („Recht auf Vergessenwerden“) (Artikel 17 DSGVO)</li>
                                    <li>Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)</li>
                                    <li>Recht auf Benachrichtigung – Mitteilungspflicht im Zusammenhang mit der Berichtigung oder Löschung personenbezogener Daten oder der Einschränkung der Verarbeitung (Artikel 19 DSGVO)</li>
                                    <li>Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)</li>
                                    <li>Widerspruchsrecht (Artikel 21 DSGVO)</li>
                                    <li>Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung — einschließlich Profiling — beruhenden Entscheidung unterworfen zu werden (Artikel 22 DSGVO)</li>
                                </ul>
                                <p>Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich an die Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI) wenden.</p>
                            </div>
                            <div>
                                <h2>Auswertung des Besucherverhaltens</h2>
                                <p>In der folgenden Datenschutzerklärung informieren wir Sie darüber, ob und wie wir Daten Ihres Besuchs dieser Website auswerten. Die Auswertung der gesammelten Daten erfolgt in der Regel anonym und wir können von Ihrem Verhalten auf dieser Website nicht auf Ihre Person schließen.

                                    Mehr über Möglichkeiten dieser Auswertung der Besuchsdaten zu widersprechen erfahren Sie in der folgenden Datenschutzerklärung.</p>
                            </div>
                            <div>
                                <h2>Google Maps Datenschutzerklärung</h2>
                                <p>Wir benützen auf unserer Website Google Maps der Firma Google Inc. (1600 Amphitheatre Parkway Mountain View, CA 94043, USA). Mit Google Maps können wir Standorte visuell besser darstellen und damit unser Service verbessern. Durch die Verwendung von Google Maps werden Daten an Google übertragen und auf den Google-Servern gespeichert. Hier wollen wir nun genauer darauf eingehen, was Google Maps ist, warum wir diesen Google-Dienst in Anspruch nehmen, welche Daten gespeichert werden und wie Sie dies unterbinden können.</p>
                                <h3>Was ist Google Maps?</h3>
                                <p>Google Maps ist ein Online-Kartendienst der Firma Google Inc. Mit Google Maps können Sie im Internet über einen PC oder über eine App genaue Standorte von Städten, Sehenswürdigkeiten, Unterkünften oder Unternehmen suchen. Wenn Unternehmen auf Google My Business vertreten sind, werden neben dem Standort noch weitere Informationen über die Firma angezeigt. Um  die Anfahrtsmöglichkeit anzuzeigen, können Kartenausschnitte eines Standorts per HTML-Code in eine Website eingebunden werden. Google Maps zeigt die Erdoberfläche als Straßenkarte oder als Luft- bzw. Satellitenbild an. Dank der Street View Bilder und den qualitativ hochwertigen Satellitenbildern sind sehr genaue Darstellungen möglich.</p>
                                <h3>Warum verwenden wir Google Maps auf unserer Website?</h3>
                                <p>All unsere Bemühungen auf dieser Seite verfolgen das Ziel, Ihnen eine nützliche und sinnvolle Zeit auf unserer Website zu bieten. Durch die Einbindung von Google Maps können wir Ihnen die wichtigsten Informationen zu diversen Standorten liefern. Dank Google Maps sehen Sie auf einen Blick wo wir unseren Firmensitz haben. Die Wegbeschreibung zeigt Ihnen immer den besten bzw. schnellsten Weg zu uns. Sie können den Anfahrtsweg für Routen mit dem Auto, mit öffentlichen Verkehrsmitteln, zu Fuß oder mit dem Fahrrad abrufen. Für uns ist die Bereitstellung von Google Maps Teil unseres Kundenservice.</p>
                                <h3>Welche Daten werden von Google Maps gespeichert?</h3>
                                <p>Damit Google Maps ihren Dienst vollständig anbieten kann, muss das Unternehmen Daten von Ihnen aufnehmen und speichern. Dazu zählen unter anderem die eingegebenen Suchbegriffe, Ihre IP-Adresse und die Breiten- bzw. Längenkoordinaten. Benutzen Sie die Routenplaner-Funktion wird auch die eingegebene Startadresse gespeichert. Diese Datenspeicherung passiert allerdings auf den Webseiten von Google Maps. Wir können Sie darüber nur informieren, aber keinen Einfluss nehmen. Da wir Google Maps in unsere Website eingebunden haben, setzt Google mindestens ein Cookie (Name: NID) in Ihrem Browser. Dieses Cookie speichert Daten über Ihr Userverhalten. Google nutzt diese Daten in erster Linie, um eigene Dienste zu optimieren und individuelle, personalisierte Werbung für Sie bereitzustellen.

                                    Folgendes Cookie wird aufgrund der Einbindung von Google Maps in Ihrem Browser gesetzt:</p>
                                <ul>
                                    <li>Name: NID</li>
                                    <li>Ablaufzeit: nach 6 Monaten</li>
                                    <li>Verwendung: NID wird von Google verwendet, um Werbeanzeigen an Ihre Google-Suche anzupassen. Mit Hilfe des Cookies „erinnert“ sich Google an Ihre am häufigsten eingegebenen Suchanfragen oder Ihre frühere Interaktion mit Anzeigen. So bekommen Sie immer maßgeschneiderte Werbeanzeigen. Das Cookie enthält eine einzigartige ID, die Google benutzt, persönliche Einstellungen des Users für Werbezwecke zu sammeln.</li>
                                    <li>Beispielwert: 188=h26c1Ktha7fCQTx8rXgLyATyITJ311118334</li>
                                </ul>
                                <p>Anmerkung: Wir können bei den Angaben der gespeicherten Daten keine Vollständigkeit gewährleisten. Speziell bei der Verwendung von Cookies sind Veränderungen bei Google nie auszuschließen. Um das Cookie NID zu identifizieren, wurde eine eigene Testseite angelegt, wo ausschließlich Google Maps eingebunden war.</p>
                                <h3>Wie lange und wo werden die Daten gespeichert?</h3>
                                <p>Die Google-Server stehen in Rechenzentren auf der ganzen Welt. Die meisten Server befinden sich allerdings in Amerika. Aus diesem Grund werden Ihre Daten auch vermehrt in den USA gespeichert. Hier können Sie genau nachlesen wo sich die Google-Rechenzentren befinden: https://www.google.com/about/datacenters/inside/locations/?hl=de

                                    Die Daten verteilt Google auf verschiedenen Datenträgern. Dadurch sind die Daten schneller abrufbar und werden vor etwaigen Manipulationsversuchen besser geschützt. Jedes Rechenzentrum hat auch spezielle Notfallprogramme. Wenn es zum Beispiel Probleme bei der Google-Hardware gibt oder eine Naturkatastrophe die Server beeinträchtigt, bleiben die Daten mit hoher Wahrscheinlich dennoch geschützt.

                                    Manche Daten speichert Google für einen festgelegten Zeitraum. Bei anderen Daten bietet Google lediglich die Möglichkeit, diese manuell zu löschen. Weiters anonymisiert das Unternehmen auch Informationen (wie zum Beispiel Werbedaten) in Serverprotokollen, indem sie einen Teil der IP-Adresse und Cookie-Informationen nach 9 bzw.18 Monaten löschen.</p>
                                <h3>Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?</h3>
                                <p>Mit der 2019 eingeführten automatischen Löschfunktion von Standort- und Aktivitätsdaten werden Informationen zur Standortbestimmung und Web-/App-Aktivität – abhängig von Ihrer Entscheidung – entweder 3 oder 18 Monate gespeichert und dann gelöscht. Zudem kann man diese Daten über das Google-Konto auch jederzeit manuell aus dem Verlauf löschen. Wenn Sie Ihre Standorterfassung vollständig verhindern wollen, müssen Sie im Google-Konto die Rubrik „Web- und App-Aktivität“ pausieren. Klicken Sie „Daten und Personalisierung“ und dann auf die Option „Aktivitätseinstellung“. Hier können Sie die Aktivitäten ein- bzw. ausschalten.

                                    In Ihrem Browser können Sie weiters auch einzelne Cookies deaktivieren, löschen oder verwalten. Je nach dem welchen Browser Sie verwenden, funktioniert dies auf unterschiedliche Art und Weise.</p>
                                <p>Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so einrichten, dass er Sie immer informiert, wenn ein Cookie gesetzt werden soll. So können Sie bei jedem einzelnen Cookie entscheiden, ob Sie es erlauben oder nicht.

                                    Google ist aktiver Teilnehmer beim EU-U.S. Privacy Shield Framework, wodurch der korrekte und sichere Datentransfer persönlicher Daten geregelt wird. Mehr Informationen dazu finden Sie auf https://www.privacyshield.gov/participant?id=a2zt0000000TO6hAAG. Wenn Sie mehr über die Datenverarbeitung von Google erfahren wollen, empfehlen wir Ihnen die hauseigene Datenschutzerklärung des Unternehmens unter https://policies.google.com/privacy?hl=de.

                                    </p>
                                <span>Quelle: Erstellt mit dem Datenschutz Generator von AdSimple in Kooperation mit fashiongott.de</span>
                            </div>

                        </Col>
                        <Col xs={1} sm={1} md={2}/>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Privacy;
