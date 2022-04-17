var words = [
  ["Abbildung", "die", ""],
  ["Abfall", "der", ""],
  ["Abgas", "das", ""],
  ["Abitur", "das", ""],
  ["Abonnement", "das", ""],
  ["Abschluss", "der", ""],
  ["Absender", "der", ""],
  ["Absicht", "die", ""],
  ["Abteilung", "die", ""],
  ["Achtung", "die", ""],
  ["Adresse", "die", ""],
  ["Agentur", "die", ""],
  ["Ahnung", "die", ""],
  ["Aktion", "die", ""],
  ["Aktivität", "die", ""],
  ["Alarm", "der", ""],
  ["Alkohol", "der", ""],
  ["Alltag", "der", ""],
  ["Alphabet", "das", ""],
  ["Alter", "das", ""],
  ["Altersheim", "das", ""],
  ["Ampel", "die", ""],
  ["Amt", "das", ""],
  ["Änderung", "die", ""],
  ["Anfang", "der", ""],
  ["Angabe", "die", ""],
  ["Angebot", "das", ""],
  ["Angst", "die", ""],
  ["Ankunft", "die", ""],
  ["Anlage", "die", ""],
  ["Anmeldung", "die", ""],
  ["Anrede", "die", ""],
  ["Anruf", "der", ""],
  ["Anrufbeantworter", "der", ""],
  ["Ansage", "die", ""],
  ["Anschluss", "der", ""],
  ["Anspruch", "der", ""],
  ["Antrag", "der", ""],
  ["Antwort", "die", ""],
  ["Anwalt", "der", ""],
  ["Anzeige", "die", ""],
  ["Anzug", "der", ""],
  ["Apartment", "das", ""],
  ["Apfel", "der", ""],
  ["Apotheke", "die", ""],
  ["Apparat", "der", ""],
  ["Appetit", "der", ""],
  ["Aprikose", "die", ""],
  ["Arbeit", "die", ""],
  ["Arbeiter", "der", ""],
  ["Arbeitgeber", "der", ""],
  ["Arbeitnehmer", "der", ""],
  ["Arbeitserlaubnis", "die", "komposition"],
  ["Arbeitslosigkeit", "die", ""],
  ["Arbeitsplatz", "der", "komposition"],
  ["Arbeitsstelle", "die", "komposition"],
  ["Ärger", "der", ""],
  ["Art", "die", ""],
  ["Artikel", "der", ""],
  ["Arzt", "der", ""],
  ["Asyl", "das", ""],
  ["Aufenthalt", "der", ""],
  ["Aufforderung", "die", ""],
  ["Aufgabe", "die", ""],
  ["Aufnahme", "die", ""],
  ["Auftrag", "der", ""],
  ["Aufzug", "der", ""],
  ["Auge", "das", ""],
  ["Augenblick", "der", ""],
  ["Ausbildung", "die", ""],
  ["Ausbildungsplatz", "der", "komposition"],
  ["Ausdruck", "der", ""],
  ["Ausfahrt", "die", ""],
  ["Ausflug", "der", ""],
  ["Ausgabe", "die", ""],
  ["Ausgang", "der", ""],
  ["Aushilfe", "die", ""],
  ["Auskunft", "die", ""],
  ["Ausland", "das", ""],
  ["Ausländer", "der", ""],
  ["Ausnahme", "die", ""],
  ["Aussicht", "die", ""],
  ["Aussprache", "die", ""],
  ["Ausstellung", "die", ""],
  ["Ausweis", "der", ""],
  ["Auto", "das", ""],
  ["Autobahn", "die", ""],
  ["Automat", "der", ""],
  ["Baby", "das", ""],
  ["Babysitter", "der", ""],
  ["Bäckerei", "die", ""],
  ["Bad", "das", ""],
  ["Badewanne", "die", ""],
  ["Bahn", "die", ""],
  ["Bahnhof", "der", ""],
  ["Bahnsteig", "der", ""],
  ["Balkon", "der", ""],
  ["Ball", "der", ""],
  ["Banane", "die", ""],
  ["Bankleitzahl", "die", "komposition"],
  ["Bargeld", "das", ""],
  ["Bart", "der", ""],
  ["Batterie", "die", ""],
  ["Bau", "der", ""],
  ["Bauch", "der", ""],
  ["Bauer", "der", ""],
  ["Bauernhof", "der", ""],
  ["Baum", "der", ""],
  ["Baustelle", "die", ""],
  ["Beamte", "der", ""],
  ["Bedienungsanleitung", "die", "komposition"],
  ["Bedingung", "die", ""],
  ["Beginn", "der", ""],
  ["Begründung", "die", ""],
  ["Behörde", "die", ""],
  ["Bein", "das", ""],
  ["Beispiel", "das", ""],
  ["Beitrag", "der", ""],
  ["Beleg", "der", ""],
  ["Benzin", "das", ""],
  ["Beratung", "die", ""],
  ["Bereich", "der", ""],
  ["Berg", "der", ""],
  ["Bericht", "der", ""],
  ["Beruf", "der", ""],
  ["Beschäftigung", "die", ""],
  ["Bescheid", "der", ""],
  ["Bescheinigung", "die", ""],
  ["Beschreibung", "die", ""],
  ["Besprechung", "die", ""],
  ["Besserung", "die", ""],
  ["Bestätigung", "die", ""],
  ["Besuch", "der", ""],
  ["Betrag", "der", ""],
  ["Betreuung", "die", ""],
  ["Betrieb", "der", ""],
  ["Betriebsrat", "der", ""],
  ["Bett", "das", ""],
  ["Bevölkerung", "die", ""],
  ["Bewegung", "die", ""],
  ["Beweis", "der", ""],
  ["Bewerbung", "die", ""],
  ["Bewohner", "der", ""],
  ["Beziehung", "die", ""],
  ["Bibliothek", "die", ""],
  ["Bier", "das", ""],
  ["Bild", "das", ""],
  ["Bildschirm", "der", ""],
  ["Birne", "die", ""],
  ["Blatt", "das", ""],
  ["Bleistift", "der", ""],
  ["Blick", "der", ""],
  ["Blitz", "der", ""],
  ["Blume", "die", ""],
  ["Bluse", "die", ""],
  ["Blut", "das", ""],
  ["Boden", "der", ""],
  ["Bogen", "der", ""],
  ["Bohne", "die", ""],
  ["Bonbon", "das", ""],
  ["Boot", "das", ""],
  ["Botschaft", "die", ""],
  ["Breite", "die", ""],
  ["Bremse", "die", ""],
  ["Brief", "der", ""],
  ["Briefkasten", "der", "komposition"],
  ["Briefmarke", "die", "komposition"],
  ["Briefträger", "der", "komposition"],
  ["Briefumschlag", "der", "komposition"],
  ["Brille", "die", ""],
  ["Broschüre", "die", ""],
  ["Brot", "das", ""],
  ["Brötchen", "das", ""],
  ["Brücke", "die", ""],
  ["Bruder", "der", ""],
  ["Brust", "die", ""],
  ["Buch", "das", ""],
  ["Bücherei", "die", ""],
  ["Buchhandlung", "die", ""],
  ["Buchstabe", "der", ""],
  ["Bürger", "der", ""],
  ["Bürgerbüro", "das", "komposition"],
  ["Bürgersteig", "der", ""],
  ["Büro", "das", ""],
  ["Bürste", "die", ""],
  ["Bus", "der", ""],
  ["Butter", "die", ""],
  ["Café", "das", ""],
  ["Camping", "das", ""],
  ["CD-ROM", "die", ""],
  ["CD", "die", ""],
  ["Chance", "die", ""],
  ["Chef", "der", ""],
  ["Chemie", "die", ""],
  ["Club", "der", ""],
  ["Computer", "der", ""],
  ["Couch", "die", ""],
  ["Cousin", "der", ""],
  ["Creme", "die", ""],
  ["Dach", "das", ""],
  ["Dame", "die", ""],
  ["Dank", "der", ""],
  ["Datei", "die", ""],
  ["Datum", "das", ""],
  ["Decke", "die", ""],
  ["Demokratie", "die", ""],
  ["Diät", "die", ""],
  ["Dieb", "der", ""],
  ["Dienst", "der", ""],
  ["Diesel", "der", ""],
  ["Ding", "das", ""],
  ["Direktor", "der", ""],
  ["Disko", "die", ""],
  ["Diskussion", "die", ""],
  ["Doktor", "der", ""],
  ["Dorf", "das", ""],
  ["Dose", "die", ""],
  ["Drogerie", "die", ""],
  ["Druck", "der", ""],
  ["Drucker", "der", ""],
  ["Durchsage", "die", ""],
  ["Durst", "der", ""],
  ["Dusche", "die", ""],
  ["DVD", "die", ""],
  ["E-Mail", "die", ""],
  ["Ecke", "die", ""],
  ["Ehe", "die", ""],
  ["Ehefrau", "die", ""],
  ["Ehegatte", "der", ""],
  ["Ehemann", "der", ""],
  ["Ehepaar", "das", ""],
  ["Ehre", "die", ""],
  ["Ei", "das", ""],
  ["Eile", "die", ""],
  ["Einbahnstraße", "die", "komposition"],
  ["Einbrecher", "der", ""],
  ["Einbruch", "der", ""],
  ["Eindruck", "der", ""],
  ["Einfahrt", "die", ""],
  ["Einfall", "der", ""],
  ["Einfluss", "der", ""],
  ["Einführung", "die", ""],
  ["Eingang", "der", ""],
  ["Einkauf", "der", ""],
  ["Einkommen", "das", ""],
  ["Einladung", "die", ""],
  ["Einnahme", "die", ""],
  ["Einrichtung", "die", ""],
  ["Einschreiben", "das", ""],
  ["Eintritt", "der", ""],
  ["Einwohner", "der", ""],
  ["Einzelheit", "die", ""],
  ["Eis", "das", ""],
  ["Eisen", "das", ""],
  ["Eisenbahn", "die", ""],
  ["Eltern", "die", ""],
  ["Empfang", "der", ""],
  ["Empfehlung", "die", ""],
  ["Ende", "das", ""],
  ["Energie", "die", ""],
  ["Enkel", "der", ""],
  ["Entfernung", "die", ""],
  ["Entscheidung", "die", ""],
  ["Entschuldigung", "die", ""],
  ["Enttäuschung", "die", ""],
  ["Entwicklung", "die", ""],
  ["Erde", "die", ""],
  ["Erdgeschoss", "das", ""],
  ["Ereignis", "das", ""],
  ["Erfahrung", "die", ""],
  ["Erfindung", "die", ""],
  ["Erfolg", "der", ""],
  ["Ergebnis", "das", ""],
  ["Erhöhung", "die", ""],
  ["Erholung", "die", ""],
  ["Erinnerung", "die", ""],
  ["Erklärung", "die", ""],
  ["Erlaubnis", "die", ""],
  ["Erlebnis", "das", ""],
  ["Ermäßigung", "die", ""],
  ["Ernährung", "die", ""],
  ["Eröffnung", "die", ""],
  ["Ersatz", "der", ""],
  ["Ersatzteil", "das", "komposition"],
  ["Erziehung", "die", ""],
  ["Essig", "der", ""],
  ["Experte", "der", ""],
  ["Export", "der", ""],
  ["Fabrik", "die", ""],
  ["Fach", "das", ""],
  ["Fachleute", "die", "komposition"],
  ["Fachmann", "der", ""],
  ["Fahrbahn", "die", ""],
  ["Fähre", "die", ""],
  ["Fahrer", "der", ""],
  ["Fahrkarte", "die", "komposition"],
  ["Fahrplan", "der", "komposition"],
  ["Fahrrad", "das", "komposition"],
  ["Fahrschule", "die", "komposition"],
  ["Fahrzeug", "das", "komposition"],
  ["Fall", "der", ""],
  ["Familie", "die", ""],
  ["Familienstand", "der", "komposition"],
  ["Fan", "der", ""],
  ["Fantasie", "die", ""],
  ["Farbe", "die", ""],
  ["Fax", "das", ""],
  ["Fehler", "der", ""],
  ["Feier", "die", ""],
  ["Feierabend", "der", ""],
  ["Feiertag", "der", ""],
  ["Fenster", "das", ""],
  ["Ferien", "die", ""],
  ["Fernbedienung", "die", "komposition"],
  ["Fernseher", "der", ""],
  ["Festnetz", "das", ""],
  ["Festplatte", "die", "komposition"],
  ["Feuer", "das", ""],
  ["Feuerwehr", "die", "komposition"],
  ["Feuerzeug", "das", "komposition"],
  ["Fieber", "das", ""],
  ["Figur", "die", ""],
  ["Film", "der", ""],
  ["Finger", "der", ""],
  ["Firma", "die", ""],
  ["Fisch", "der", ""],
  ["Fitness", "die", ""],
  ["Fläche", "die", ""],
  ["Flasche", "die", ""],
  ["Fleck", "der", ""],
  ["Fleisch", "das", ""],
  ["Flucht", "die", ""],
  ["Flug", "der", ""],
  ["Flughafen", "der", "komposition"],
  ["Flugzeug", "das", "komposition"],
  ["Flur", "der", ""],
  ["Fluss", "der", ""],
  ["Flüssigkeit", "die", ""],
  ["Folge", "die", ""],
  ["Forderung", "die", ""],
  ["Förderung", "die", ""],
  ["Form", "die", ""],
  ["Formular", "das", ""],
  ["Fortbildung", "die", ""],
  ["Fortschritt", "der", ""],
  ["Fortsetzung", "die", ""],
  ["Foto", "das", ""],
  ["Fotoapparat", "der", "komposition"],
  ["Fotografie", "die", ""],
  ["Frage", "die", ""],
  ["Frau", "die", ""],
  ["Freiheit", "die", ""],
  ["Freizeit", "die", ""],
  ["Fremdsprache", "die", "komposition"],
  ["Freude", "die", ""],
  ["Freund", "der", ""],
  ["Freundschaft", "die", ""],
  ["Friseur", "der", ""],
  ["Frist", "die", ""],
  ["Frucht", "die", ""],
  ["Frühstück", "das", ""],
  ["Führerschein", "der", ""],
  ["Führung", "die", ""],
  ["Fundbüro", "das", ""],
  ["Fuß", "der", ""],
  ["Fußball", "der", ""],
  ["Fußgänger", "der", ""],
  ["Fußgängerzone", "die", "komposition"],
  ["Gabel", "die", ""],
  ["Gang", "der", ""],
  ["Garage", "die", ""],
  ["Garantie", "die", ""],
  ["Garderobe", "die", ""],
  ["Garten", "der", ""],
  ["Gas", "das", ""],
  ["Gast", "der", ""],
  ["Gaststätte", "die", ""],
  ["Gebäck", "das", ""],
  ["Gebäude", "das", ""],
  ["Gebrauchsanweisung", "die", ""],
  ["Gebühr", "die", ""],
  ["Geburt", "die", ""],
  ["Geburtstag", "der", "komposition"],
  ["Geduld", "die", ""],
  ["Gefahr", "die", ""],
  ["Gefängnis", "das", ""],
  ["Gefühl", "das", ""],
  ["Gegend", "die", ""],
  ["Gegenstand", "der", ""],
  ["Gehalt", "das", ""],
  ["Geheimnis", "das", ""],
  ["Geld", "das", ""],
  ["Gelegenheit", "die", ""],
  ["Gemüse", "das", ""],
  ["Genehmigung", "die", ""],
  ["Gepäck", "das", ""],
  ["Gerät", "das", ""],
  ["Gericht", "das", ""],
  ["Gerichtsverhandlung", "die", ""],
  ["Geschäft", "das", ""],
  ["Geschenk", "das", ""],
  ["Geschichte", "die", ""],
  ["Geschirr", "das", ""],
  ["Geschlecht", "das", ""],
  ["Geschmack", "der", ""],
  ["Geschwindigkeit", "die", ""],
  ["Geschwister", "das", ""],
  ["Gesellschaft", "die", ""],
  ["Gesetz", "das", ""],
  ["Gesicht", "das", ""],
  ["Gespräch", "das", ""],
  ["Gesundheit", "die", ""],
  ["Getränk", "das", ""],
  ["Gewerkschaft", "die", ""],
  ["Gewicht", "das", ""],
  ["Gewinn", "der", ""],
  ["Gewissen", "das", ""],
  ["Gewitter", "das", ""],
  ["Gewürz", "das", ""],
  ["Gift", "das", ""],
  ["Girokonto", "das", ""],
  ["Gitarre", "die", ""],
  ["Glas", "das", ""],
  ["Gleis", "das", ""],
  ["Glück", "das", ""],
  ["Glückwunsch", "der", "komposition"],
  ["Gold", "das", ""],
  ["Gott", "der", ""],
  ["Gras", "das", ""],
  ["Grenze", "die", ""],
  ["Grill", "der", ""],
  ["Grippe", "die", ""],
  ["Größe", "die", ""],
  ["Großstadt", "die", "komposition"],
  ["Grund", "der", ""],
  ["Grundstück", "das", ""],
  ["Gruppe", "die", ""],
  ["Gruß", "der", ""],
  ["Haar", "das", ""],
  ["Hackfleisch", "das", "komposition"],
  ["Hafen", "der", ""],
  ["Hähnchen", "das", ""],
  ["Halbpension", "die", "komposition"],
  ["Hälfte", "die", ""],
  ["Halle", "die", ""],
  ["Hals", "der", ""],
  ["Haltestelle", "die", "komposition"],
  ["Hammer", "der", ""],
  ["Hand", "die", ""],
  ["Handel", "der", ""],
  ["Händler", "der", ""],
  ["Handtuch", "das", ""],
  ["Handwerker", "der", ""],
  ["Handy", "das", ""],
  ["Hauptbahnhof", "der", "komposition"],
  ["Hauptstadt", "die", "komposition"],
  ["Haus", "das", ""],
  ["Hausaufgabe", "die", "komposition"],
  ["Hausfrau", "die", "komposition"],
  ["Haushalt", "der", ""],
  ["Hausmann", "der", "komposition"],
  ["Hausmeister", "der", "komposition"],
  ["Haustier", "das", "komposition"],
  ["Haut", "die", ""],
  ["Heft", "das", ""],
  ["Heim", "das", ""],
  ["Heimat", "die", ""],
  ["Heimweh", "das", ""],
  ["Heizung", "die", ""],
  ["Hemd", "das", ""],
  ["Herd", "der", ""],
  ["Herkunft", "die", ""],
  ["Herkunftsland", "das", "komposition"],
  ["Herr", "der", ""],
  ["Hersteller", "der", ""],
  ["Herz", "das", ""],
  ["Hilfe", "die", ""],
  ["Himmel", "der", ""],
  ["Hit", "der", ""],
  ["Hitze", "die", ""],
  ["Hobby", "das", ""],
  ["Hochzeit", "die", "komposition"],
  ["Hof", "der", ""],
  ["Hoffnung", "die", ""],
  ["Höhe", "die", ""],
  ["Holz", "das", ""],
  ["Honig", "der", ""],
  ["Hose", "die", ""],
  ["Hotel", "das", ""],
  ["Hühnchen", "das", ""],
  ["Humor", "der", ""],
  ["Hund", "der", ""],
  ["Hunger", "der", ""],
  ["Hut", "der", ""],
  ["Idee", "die", ""],
  ["Import", "der", ""],
  ["Industrie", "die", ""],
  ["Industriegebiet", "das", "komposition"],
  ["Infektion", "die", ""],
  ["Information", "die", ""],
  ["Ingenieur", "der", ""],
  ["Inhalt", "der", ""],
  ["Innenstadt", "die", "komposition"],
  ["Insel", "die", ""],
  ["Institut", "das", ""],
  ["Instrument", "das", ""],
  ["Integration", "die", ""],
  ["Intelligenz", "die", ""],
  ["Intensivkurs", "der", "komposition"],
  ["Interesse", "das", ""],
  ["Internet", "das", ""],
  ["Internetanschluss", "der", "komposition"],
  ["Interview", "das", ""],
  ["Jacke", "die", ""],
  ["Jazz", "der", ""],
  ["Jeans", "die", ""],
  ["Job", "der", ""],
  ["Journalist", "der", ""],
  ["Jugend", "die", ""],
  ["Junge", "der", ""],
  ["Kabine", "die", ""],
  ["Kaffee", "der", ""],
  ["Kalender", "der", ""],
  ["Kamera", "die", ""],
  ["Kampf", "der", ""],
  ["Kanal", "der", ""],
  ["Kanne", "die", ""],
  ["Kantine", "die", ""],
  ["Kapitel", "das", ""],
  ["Karriere", "die", ""],
  ["Karte", "die", ""],
  ["Kartoffel", "die", ""],
  ["Käse", "der", ""],
  ["Kasse", "die", ""],
  ["Kasten", "der", ""],
  ["Katalog", "der", ""],
  ["Katastrophe", "die", ""],
  ["Katze", "die", ""],
  ["Kauf", "der", ""],
  ["Käufer", "der", ""],
  ["Kaufhaus", "das", ""],
  ["Keller", "der", ""],
  ["Kellner", "der", ""],
  ["Kenntnisse", "die", ""],
  ["Kennzeichen", "das", ""],
  ["Kerze", "die", ""],
  ["Kette", "die", ""],
  ["Kind", "das", ""],
  ["Kindergarten", "der", "komposition"],
  ["Kinderwagen", "der", "komposition"],
  ["Kindheit", "die", ""],
  ["Kino", "das", ""],
  ["Kiosk", "der", ""],
  ["Kirche", "die", ""],
  ["Kissen", "das", ""],
  ["Klassenarbeit", "die", "komposition"],
  ["Klavier", "das", ""],
  ["Kleid", "das", ""],
  ["Kleidung", "die", ""],
  ["Klima", "das", ""],
  ["Klimaanlage", "die", ""],
  ["Klingel", "die", ""],
  ["Klinik", "die", ""],
  ["Kloß", "der", ""],
  ["Kneipe", "die", ""],
  ["Knie", "das", ""],
  ["Knochen", "der", ""],
  ["Knopf", "der", ""],
  ["Koch", "der", ""],
  ["Koffer", "der", ""],
  ["Kofferraum", "der", ""],
  ["Kollege", "der", ""],
  ["Kommunikation", "die", ""],
  ["Kompromiss", "der", ""],
  ["König", "der", ""],
  ["Konkurrenz", "die", ""],
  ["Konsulat", "das", ""],
  ["Kontakt", "der", ""],
  ["Konto", "das", ""],
  ["Kontrolle", "die", ""],
  ["Konzert", "das", ""],
  ["Kopf", "der", ""],
  ["Kopie", "die", ""],
  ["Körper", "der", ""],
  ["Kosmetik", "die", ""],
  ["Kosten", "die", ""],
  ["Kostüm", "das", ""],
  ["Kraft", "die", ""],
  ["Kraftfahrzeug", "das", "komposition"],
  ["Krankenhaus", "das", "komposition"],
  ["Krankenkasse", "die", "komposition"],
  ["Krankenpfleger", "der", "komposition"],
  ["Krankenschwester", "die", "komposition"],
  ["Krankenwagen", "der", "komposition"],
  ["Krankheit", "die", ""],
  ["Kredit", "der", ""],
  ["Kreditkarte", "die", "komposition"],
  ["Kreis", "der", ""],
  ["Kreuz", "das", ""],
  ["Kreuzung", "die", ""],
  ["Krimi", "der", ""],
  ["Kriminalpolizei", "die", "komposition"],
  ["Kritik", "die", ""],
  ["Küche", "die", ""],
  ["Kuchen", "der", ""],
  ["Kugelschreiber", "der", "komposition"],
  ["Kuh", "die", ""],
  ["Kühlschrank", "der", "komposition"],
  ["Kuli", "der", ""],
  ["Kultur", "die", ""],
  ["Kunde", "der", ""],
  ["Kündigung", "die", ""],
  ["Kunst", "die", ""],
  ["Künstler", "der", ""],
  ["Kunststoff", "der", ""],
  ["Kurs", "der", ""],
  ["Kursleiter", "der", "komposition"],
  ["Kurve", "die", ""],
  ["Kuss", "der", ""],
  ["Küste", "die", ""],
  ["Labor", "das", ""],
  ["Laden", "der", ""],
  ["Lage", "die", ""],
  ["Lager", "das", ""],
  ["Lampe", "die", ""],
  ["Land", "das", ""],
  ["Landung", "die", ""],
  ["Landwirtschaft", "die", "komposition"],
  ["Länge", "die", ""],
  ["Lärm", "der", ""],
  ["Laster", "der", ""],
  ["Laufwerk", "das", ""],
  ["Laune", "die", ""],
  ["Lautsprecher", "der", "komposition"],
  ["Lebensgefahr", "die", "komposition"],
  ["Lebenslauf", "der", "komposition"],
  ["Lebensmittel", "das", "komposition"],
  ["Leder", "das", ""],
  ["Lehre", "die", ""],
  ["Lehrer", "der", ""],
  ["Lehrling", "der", ""],
  ["Leistung", "die", ""],
  ["Leiter", "der", ""],
  ["Leitung", "die", ""],
  ["Leute", "die", ""],
  ["Licht", "das", ""],
  ["Liebe", "die", ""],
  ["Lied", "das", ""],
  ["Lieferung", "die", ""],
  ["Lift", "der", ""],
  ["Limonade", "die", ""],
  ["Linie", "die", ""],
  ["Lippe", "die", ""],
  ["Liste", "die", ""],
  ["Loch", "das", ""],
  ["Löffel", "der", ""],
  ["Lohn", "der", ""],
  ["Lokal", "das", ""],
  ["Lösung", "die", ""],
  ["Luft", "die", ""],
  ["Lüge", "die", ""],
  ["Lust", "die", ""],
  ["Mädchen", "das", ""],
  ["Mädchenname", "der", "komposition"],
  ["Magen", "der", ""],
  ["Mahlzeit", "die", ""],
  ["Mahnung", "die", ""],
  ["Makler", "der", ""],
  ["Mal", "das", ""],
  ["Maler", "der", ""],
  ["Mama", "die", ""],
  ["Mann", "der", ""],
  ["Mannschaft", "die", ""],
  ["Mantel", "der", ""],
  ["Märchen", "das", ""],
  ["Margarine", "die", ""],
  ["Marke", "die", ""],
  ["Markt", "der", ""],
  ["Marmelade", "die", ""],
  ["Maschine", "die", ""],
  ["Maßnahme", "die", ""],
  ["Material", "das", ""],
  ["Mathematik", "die", ""],
  ["Mauer", "die", ""],
  ["Maus", "die", ""],
  ["Mechaniker", "der", ""],
  ["Medikament", "das", ""],
  ["Medizin", "die", ""],
  ["Meer", "das", ""],
  ["Mehl", "das", ""],
  ["Mehrheit", "die", ""],
  ["Mehrwertsteuer", "die", "komposition"],
  ["Meinung", "die", ""],
  ["Meister", "der", ""],
  ["Meldung", "die", ""],
  ["Menge", "die", ""],
  ["Mensch", "der", ""],
  ["Messe", "die", ""],
  ["Messer", "das", ""],
  ["Metall", "das", ""],
  ["Methode", "die", ""],
  ["Metzgerei", "die", ""],
  ["Miete", "die", ""],
  ["Mieter", "der", ""],
  ["Milch", "die", ""],
  ["Minderheit", "die", ""],
  ["Mineralwasser", "das", "komposition"],
  ["Missverständnis", "das", "komposition"],
  ["Mitarbeiter", "der", ""],
  ["Mitglied", "das", ""],
  ["Mitte", "die", ""],
  ["Mittel", "das", ""],
  ["Möbel", "die", ""],
  ["Mobiltelefon", "das", "komposition"],
  ["Mode", "die", ""],
  ["Modell", "das", ""],
  ["Möglichkeit", "die", ""],
  ["Moment", "der", ""],
  ["Mond", "der", ""],
  ["Monitor", "der", ""],
  ["Motor", "der", ""],
  ["Motorrad", "das", "komposition"],
  ["Mühe", "die", ""],
  ["Müll", "der", ""],
  ["Müllabfuhr", "die", ""],
  ["Mülleimer", "der", ""],
  ["Mülltonne", "die", "komposition"],
  ["Mund", "der", ""],
  ["Münze", "die", ""],
  ["Museum", "das", ""],
  ["Musik", "die", ""],
  ["Musiker", "der", ""],
  ["Muskel", "der", ""],
  ["Mut", "der", ""],
  ["Mutter", "die", ""],
  ["Muttersprache", "die", "komposition"],
  ["Nachbar", "der", ""],
  ["Nachricht", "die", ""],
  ["Nachspeise", "die", "komposition"],
  ["Nachteil", "der", "komposition"],
  ["Nachtisch", "der", "komposition"],
  ["Nadel", "die", ""],
  ["Nagel", "der", ""],
  ["Nähe", "die", ""],
  ["Name", "der", ""],
  ["Nase", "die", ""],
  ["Natur", "die", ""],
  ["Nebel", "der", ""],
  ["Neffe", "der", ""],
  ["Nerv", "der", ""],
  ["Nichte", "die", ""],
  ["Nichtraucher", "der", ""],
  ["Norden", "der", ""],
  ["Not", "die", ""],
  ["Notaufnahme", "die", ""],
  ["Note", "die", ""],
  ["Notfall", "der", ""],
  ["Notiz", "die", ""],
  ["Notruf", "der", ""],
  ["Nudel", "die", ""],
  ["Nummer", "die", ""],
  ["Obergeschoss", "das", "komposition"],
  ["Obst", "das", ""],
  ["Ofen", "der", ""],
  ["Ohr", "das", ""],
  ["Öl", "das", ""],
  ["Oma", "die", ""],
  ["Onkel", "der", ""],
  ["Opa", "der", ""],
  ["Oper", "die", ""],
  ["Operation", "die", ""],
  ["Opfer", "das", ""],
  ["Orange", "die", ""],
  ["Orchester", "das", ""],
  ["Ordner", "der", ""],
  ["Organisation", "die", ""],
  ["Original", "das", ""],
  ["Ort", "der", ""],
  ["Paar", "das", ""],
  ["Päckchen", "das", ""],
  ["Paket", "das", ""],
  ["Panne", "die", ""],
  ["Papa", "der", ""],
  ["Papier", "das", ""],
  ["Parfüm", "das", ""],
  ["Park", "der", ""],
  ["Parkhaus", "das", ""],
  ["Parkplatz", "der", "komposition"],
  ["Parkuhr", "die", ""],
  ["Partner", "der", ""],
  ["Party", "die", ""],
  ["Pass", "der", ""],
  ["Passagier", "der", ""],
  ["Patient", "der", ""],
  ["Pause", "die", ""],
  ["Pech", "das", ""],
  ["Pension", "die", ""],
  ["Person", "die", ""],
  ["Personal", "das", ""],
  ["Pfeffer", "der", ""],
  ["Pferd", "das", ""],
  ["Pflanze", "die", ""],
  ["Pflaster", "das", ""],
  ["Pflaume", "die", ""],
  ["Pfleger", "der", ""],
  ["Pflegeversicherung", "die", "komposition"],
  ["Pflicht", "die", ""],
  ["Philosophie", "die", ""],
  ["Physik", "die", ""],
  ["Picknick", "das", ""],
  ["Pille", "die", ""],
  ["Pilz", "der", ""],
  ["Plan", "der", ""],
  ["Plastik", "das", ""],
  ["Platz", "der", ""],
  ["Politik", "die", ""],
  ["Politiker", "der", ""],
  ["Polizei", "die", ""],
  ["Polizist", "der", ""],
  ["Portion", "die", ""],
  ["Post", "die", ""],
  ["Postfach", "das", "komposition"],
  ["Postkarte", "die", "komposition"],
  ["Postleitzahl", "die", ""],
  ["Praktikant", "der", ""],
  ["Praktikum", "das", ""],
  ["Praxis", "die", ""],
  ["Preis", "der", ""],
  ["Problem", "das", ""],
  ["Produkt", "das", ""],
  ["Produktion", "die", ""],
  ["Professor", "der", ""],
  ["Profi", "der", ""],
  ["Programm", "das", ""],
  ["Projekt", "das", ""],
  ["Prospekt", "der", ""],
  ["Protest", "der", ""],
  ["Prozess", "der", ""],
  ["Prüfung", "die", ""],
  ["Publikum", "das", ""],
  ["Pullover", "der", ""],
  ["Punkt", "der", ""],
  ["Puppe", "die", ""],
  ["Qualifikation", "die", ""],
  ["Qualität", "die", ""],
  ["Quark", "der", ""],
  ["Quartal", "das", ""],
  ["Quatsch", "der", ""],
  ["Querstraße", "die", ""],
  ["Quittung", "die", ""],
  ["Rabatt", "der", ""],
  ["Rad", "das", ""],
  ["Radfahrer", "der", "komposition"],
  ["Radio", "das", ""],
  ["Rand", "der", ""],
  ["Rat", "der", ""],
  ["Rathaus", "das", "komposition"],
  ["Ratschlag", "der", ""],
  ["Raucher", "der", ""],
  ["Raum", "der", ""],
  ["Reaktion", "die", ""],
  ["Realität", "die", ""],
  ["Rechner", "der", ""],
  ["Rechnung", "die", ""],
  ["Recht", "das", ""],
  ["Rechtsanwalt", "der", "komposition"],
  ["Rede", "die", ""],
  ["Reform", "die", ""],
  ["Regal", "das", ""],
  ["Regel", "die", ""],
  ["Regen", "der", ""],
  ["Region", "die", ""],
  ["Reifen", "der", ""],
  ["Reihe", "die", ""],
  ["Reinigung", "die", ""],
  ["Reis", "der", ""],
  ["Reise", "die", ""],
  ["Reisebüro", "das", "komposition"],
  ["Rekord", "der", ""],
  ["Rente", "die", ""],
  ["Rentner", "der", ""],
  ["Reparatur", "die", ""],
  ["Reservierung", "die", ""],
  ["Rest", "der", ""],
  ["Restaurant", "das", ""],
  ["Rezept", "das", ""],
  ["Rezeption", "die", ""],
  ["Rhythmus", "der", ""],
  ["Richter", "der", ""],
  ["Richtung", "die", ""],
  ["Rind", "das", ""],
  ["Ring", "der", ""],
  ["Risiko", "das", ""],
  ["Rock", "der", ""],
  ["Roman", "der", ""],
  ["Rose", "die", ""],
  ["Rücken", "der", ""],
  ["Rückfahrt", "die", "komposition"],
  ["Rückkehr", "die", ""],
  ["Rucksack", "der", ""],
  ["Rücksicht", "die", "komposition"],
  ["Ruhe", "die", ""],
  ["Rundfunk", "der", ""],
  ["S-Bahn", "die", ""],
  ["Saal", "der", ""],
  ["Sache", "die", ""],
  ["Sack", "der", ""],
  ["Saft", "der", ""],
  ["Sahne", "die", ""],
  ["Saison", "die", ""],
  ["Salat", "der", ""],
  ["Salbe", "die", ""],
  ["Salon", "der", ""],
  ["Salz", "das", ""],
  ["Sand", "der", ""],
  ["Sänger", "der", ""],
  ["Satz", "der", ""],
  ["Schachtel", "die", ""],
  ["Schaden", "der", ""],
  ["Schalter", "der", ""],
  ["Schatten", "der", ""],
  ["Schaufenster", "das", "komposition"],
  ["Schauspieler", "der", "komposition"],
  ["Scheibe", "die", ""],
  ["Scheidung", "die", ""],
  ["Schein", "der", ""],
  ["Schere", "die", ""],
  ["Schicht", "die", ""],
  ["Schiff", "das", ""],
  ["Schild", "das", ""],
  ["Schinken", "der", ""],
  ["Schirm", "der", ""],
  ["Schlaf", "der", ""],
  ["Schlange", "die", ""],
  ["Schloss", "das", ""],
  ["Schluss", "der", ""],
  ["Schlüssel", "der", ""],
  ["Schmerz", "der", ""],
  ["Schmerzmittel", "das", "komposition"],
  ["Schmuck", "der", ""],
  ["Schnee", "der", ""],
  ["Schnitzel", "das", ""],
  ["Schnupfen", "der", ""],
  ["Schokolade", "die", ""],
  ["Schrank", "der", ""],
  ["Schreibtisch", "der", "komposition"],
  ["Schrift", "die", ""],
  ["Schritt", "der", ""],
  ["Schuh", "der", ""],
  ["Schuld", "die", ""],
  ["Schule", "die", ""],
  ["Schüler", "der", ""],
  ["Schülerin", "die", ""],
  ["Schulter", "die", ""],
  ["Schutz", "der", ""],
  ["Schwangerschaft", "die", ""],
  ["Schwein", "das", ""],
  ["Schwester", "die", ""],
  ["Schwierigkeit", "die", ""],
  ["Schwimmbad", "das", "komposition"],
  ["Sehenswürdigkeit", "die", ""],
  ["Seife", "die", ""],
  ["Seite", "die", ""],
  ["Sekretärin", "die", ""],
  ["Semester", "das", ""],
  ["Sender", "der", ""],
  ["Sendung", "die", ""],
  ["Serie", "die", ""],
  ["Service", "der", ""],
  ["Sessel", "der", ""],
  ["Sicherheit", "die", ""],
  ["Sieg", "der", ""],
  ["Sieger", "der", ""],
  ["Sinn", "der", ""],
  ["Situation", "die", ""],
  ["Sitz", "der", ""],
  ["Ski", "der", ""],
  ["SMS", "die", ""],
  ["Socke", "die", ""],
  ["Sofa", "das", ""],
  ["Software", "die", ""],
  ["Sohn", "der", ""],
  ["Sonderangebot", "das", "komposition"],
  ["Sonne", "die", ""],
  ["Sorge", "die", ""],
  ["Soße", "die", ""],
  ["Souvenir", "das", ""],
  ["Spaß", "der", ""],
  ["Spaziergang", "der", ""],
  ["Speisekarte", "die", "komposition"],
  ["Speisewagen", "der", "komposition"],
  ["Sperrmüll", "der", "komposition"],
  ["Spezialist", "der", ""],
  ["Spiegel", "der", ""],
  ["Spiel", "das", ""],
  ["Spieler", "der", ""],
  ["Spielplatz", "der", ""],
  ["Spielzeug", "das", ""],
  ["Sport", "der", ""],
  ["Sportart", "die", ""],
  ["Sportler", "der", ""],
  ["Sprache", "die", ""],
  ["Sprechstunde", "die", "komposition"],
  ["Spritze", "die", ""],
  ["Spülmaschine", "die", "komposition"],
  ["Spur", "die", ""],
  ["Staat", "der", ""],
  ["Staatsangehörigkeit", "die", ""],
  ["Stadion", "das", ""],
  ["Stadt", "die", ""],
  ["Stadtplan", "der", "komposition"],
  ["Standesamt", "das", "komposition"],
  ["Standpunkt", "der", "komposition"],
  ["Star", "der", ""],
  ["Start", "der", ""],
  ["Station", "die", ""],
  ["Stau", "der", ""],
  ["Staub", "der", ""],
  ["Steak", "das", ""],
  ["Steckdose", "die", "komposition"],
  ["Stecker", "der", ""],
  ["Stein", "der", ""],
  ["Stelle", "die", ""],
  ["Stempel", "der", ""],
  ["Stern", "der", ""],
  ["Stiefel", "der", ""],
  ["Stimme", "die", ""],
  ["Stimmung", "die", ""],
  ["Stirn", "die", ""],
  ["Stock", "der", ""],
  ["Stockwerk", "das", ""],
  ["Stoff", "der", ""],
  ["Störung", "die", ""],
  ["Strafe", "die", ""],
  ["Strafzettel", "der", "komposition"],
  ["Strand", "der", ""],
  ["Straße", "die", ""],
  ["Straßenbahn", "die", "komposition"],
  ["Strecke", "die", ""],
  ["Streichholz", "das", "komposition"],
  ["Streik", "der", ""],
  ["Streit", "der", ""],
  ["Stress", "der", ""],
  ["Strom", "der", ""],
  ["Strumpf", "der", ""],
  ["Student", "der", ""],
  ["Studio", "das", ""],
  ["Studium", "das", ""],
  ["Stufe", "die", ""],
  ["Stuhl", "der", ""],
  ["Stunde", "die", ""],
  ["Sturm", "der", ""],
  ["Supermarkt", "der", ""],
  ["Suppe", "die", ""],
  ["Symbol", "das", ""],
  ["System", "das", ""],
  ["T-Shirt", "das", ""],
  ["Tabelle", "die", ""],
  ["Tablette", "die", ""],
  ["Tafel", "die", ""],
  ["Tagesablauf", "der", "komposition"],
  ["Tal", "das", ""],
  ["Tankstelle", "die", ""],
  ["Tante", "die", ""],
  ["Tanz", "der", ""],
  ["Tarif", "der", ""],
  ["Tasche", "die", ""],
  ["Taschengeld", "das", "komposition"],
  ["Taschentuch", "das", "komposition"],
  ["Tasse", "die", ""],
  ["Tastatur", "die", ""],
  ["Taste", "die", ""],
  ["Tat", "die", ""],
  ["Täter", "der", ""],
  ["Tätigkeit", "die", ""],
  ["Taxi", "das", ""],
  ["Team", "das", ""],
  ["Technik", "die", ""],
  ["Tee", "der", ""],
  ["Teil", "der", ""],
  ["Teilnahme", "die", ""],
  ["Teilnehmer", "der", ""],
  ["Teilzeit", "die", "komposition"],
  ["Telefon", "das", ""],
  ["Teller", "der", ""],
  ["Temperatur", "die", ""],
  ["Tempo", "das", ""],
  ["Tennis", "das", ""],
  ["Teppich", "der", ""],
  ["Termin", "der", ""],
  ["Terrasse", "die", ""],
  ["Test", "der", ""],
  ["Text", "der", ""],
  ["Theater", "das", ""],
  ["Thema", "das", ""],
  ["Therapie", "die", ""],
  ["Ticket", "das", ""],
  ["Tier", "das", ""],
  ["Tierpark", "der", "komposition"],
  ["Tipp", "der", ""],
  ["Tisch", "der", ""],
  ["Titel", "der", ""],
  ["Tochter", "die", ""],
  ["Tod", "der", ""],
  ["Toilette", "die", ""],
  ["Tomate", "die", ""],
  ["Tonne", "die", ""],
  ["Top", "das", ""],
  ["Topf", "der", ""],
  ["Tor", "das", ""],
  ["Tour", "die", ""],
  ["Tourismus", "der", ""],
  ["Tourist", "der", ""],
  ["Tradition", "die", ""],
  ["Trainer", "der", ""],
  ["Training", "das", ""],
  ["Transport", "der", ""],
  ["Traum", "der", ""],
  ["Trauung", "die", ""],
  ["Treffpunkt", "der", "komposition"],
  ["Trennung", "die", ""],
  ["Treppe", "die", ""],
  ["Trinkgeld", "das", "komposition"],
  ["Tropfen", "der", ""],
  ["Tür", "die", ""],
  ["Turm", "der", ""],
  ["Tüte", "die", ""],
  ["Typ", "der", ""],
  ["U-Bahn", "die", ""],
  ["Übernachtung", "die", ""],
  ["Überraschung", "die", ""],
  ["Übersetzer", "der", ""],
  ["Übersetzung", "die", ""],
  ["Überstunde", "die", "komposition"],
  ["Überweisung", "die", ""],
  ["Überzeugung", "die", ""],
  ["Übung", "die", ""],
  ["Uhr", "die", ""],
  ["Umfrage", "die", "komposition"],
  ["Umgebung", "die", ""],
  ["Umleitung", "die", "komposition"],
  ["Umwelt", "die", ""],
  ["Umzug", "der", "komposition"],
  ["Unfall", "der", ""],
  ["Unglück", "das", "komposition"],
  ["Unterhaltung", "die", ""],
  ["Unterkunft", "die", ""],
  ["Unterlagen", "die", ""],
  ["Unterricht", "der", ""],
  ["Unterschied", "der", ""],
  ["Unterschrift", "die", ""],
  ["Unterstützung", "die", ""],
  ["Untersuchung", "die", ""],
  ["Urlaub", "der", ""],
  ["Ursache", "die", ""],
  ["Urteil", "das", ""],
  ["Vater", "der", ""],
  ["Veranstaltung", "die", ""],
  ["Verantwortung", "die", ""],
  ["Verband", "der", ""],
  ["Verbindung", "die", ""],
  ["Verbot", "das", ""],
  ["Verbraucher", "der", ""],
  ["Verbrecher", "der", ""],
  ["Verdacht", "der", ""],
  ["Verein", "der", ""],
  ["Verfallsdatum", "das", "komposition"],
  ["Vergangenheit", "die", ""],
  ["Vergleich", "der", ""],
  ["Verhalten", "das", ""],
  ["Verhältnis", "das", ""],
  ["Verkäufer", "der", ""],
  ["Verkehr", "der", ""],
  ["Verkehrsmittel", "das", "komposition"],
  ["Verkehrszeichen", "das", "komposition"],
  ["Verletzung", "die", ""],
  ["Verlust", "der", ""],
  ["Vermieter", "der", ""],
  ["Vermittlung", "die", ""],
  ["Versicherung", "die", ""],
  ["Verspätung", "die", ""],
  ["Verständnis", "das", ""],
  ["Versuch", "der", ""],
  ["Vertrag", "der", ""],
  ["Vertrauen", "das", ""],
  ["Vertreter", "der", ""],
  ["Vertretung", "die", ""],
  ["Verwaltung", "die", ""],
  ["Verzeihung", "die", ""],
  ["Visum", "das", ""],
  ["Vitamin", "das", ""],
  ["Vogel", "der", ""],
  ["Vollzeit", "die", ""],
  ["Vorbereitung", "die", ""],
  ["Vorfahrt", "die", "komposition"],
  ["Vorname", "der", "komposition"],
  ["Vorort", "der", ""],
  ["Vorschlag", "der", ""],
  ["Vorschrift", "die", ""],
  ["Vorsicht", "die", "komposition"],
  ["Vorspeise", "die", ""],
  ["Vorstellung", "die", ""],
  ["Vorteil", "der", ""],
  ["Vorwahl", "die", ""],
  ["Vorwurf", "der", ""],
  ["Wagen", "der", ""],
  ["Wahl", "die", ""],
  ["Wahrheit", "die", ""],
  ["Wald", "der", ""],
  ["Wand", "die", ""],
  ["Wanderung", "die", ""],
  ["Ware", "die", ""],
  ["Wärme", "die", ""],
  ["Wäsche", "die", ""],
  ["Waschmittel", "das", "komposition"],
  ["Wasser", "das", ""],
  ["WC", "das", ""],
  ["Wecker", "der", ""],
  ["Wein", "der", ""],
  ["Weiterbildung", "die", ""],
  ["Welt", "die", ""],
  ["Weltmeister", "der", "komposition"],
  ["Weltmeisterschaft", "die", ""],
  ["Werbung", "die", ""],
  ["Werk", "das", ""],
  ["Werkstatt", "die", ""],
  ["Werkzeug", "das", "komposition"],
  ["Wettbewerb", "der", ""],
  ["Wetter", "das", ""],
  ["Wetterbericht", "der", "komposition"],
  ["Wiese", "die", ""],
  ["Wind", "der", ""],
  ["Wirklichkeit", "die", ""],
  ["Wirkung", "die", ""],
  ["Wirt", "der", ""],
  ["Wirtschaft", "die", ""],
  ["Witz", "der", ""],
  ["Wohngeld", "das", ""],
  ["Wohngemeinschaft", "die", ""],
  ["Wohnort", "der", "komposition"],
  ["Wohnung", "die", ""],
  ["Wohnungsamt", "das", "komposition"],
  ["Wohnzimmer", "das", "komposition"],
  ["Wolke", "die", ""],
  ["Wolle", "die", ""],
  ["Wort", "das", ""],
  ["Wörterbuch", "das", "komposition"],
  ["Wunde", "die", ""],
  ["Wunder", "das", ""],
  ["Wunsch", "der", ""],
  ["Wurst", "die", ""],
  ["Zahl", "die", ""],
  ["Zahlung", "die", ""],
  ["Zahn", "der", ""],
  ["Zahnbürste", "die", ""],
  ["Zahnpasta", "die", "komposition"],
  ["Zeichen", "das", ""],
  ["Zeit", "die", ""],
  ["Zeitarbeit", "die", "komposition"],
  ["Zeitpunkt", "der", "komposition"],
  ["Zeitschrift", "die", ""],
  ["Zeitung", "die", ""],
  ["Zelt", "das", ""],
  ["Zentrum", "das", ""],
  ["Zertifikat", "das", ""],
  ["Zettel", "der", ""],
  ["Zeuge", "der", ""],
  ["Zeugnis", "das", ""],
  ["Ziel", "das", ""],
  ["Zigarette", "die", ""],
  ["Zimmer", "das", ""],
  ["Zitrone", "die", ""],
  ["Zoll", "der", ""],
  ["Zone", "die", ""],
  ["Zoo", "der", ""],
  ["Zucker", "der", ""],
  ["Zufall", "der", ""],
  ["Zug", "der", ""],
  ["Zuhause", "das", ""],
  ["Zuhörer", "der", ""],
  ["Zukunft", "die", ""],
  ["Zulassung", "die", ""],
  ["Zusammenarbeit", "die", "komposition"],
  ["Zuschauer", "der", ""],
  ["Zustand", "der", ""],
  ["Zustimmung", "die", ""],
  ["Zweck", "der", ""],
  ["Zwiebel", "die", ""],
];
