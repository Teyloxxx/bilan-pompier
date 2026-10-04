/* =========================================================
   BILAN POMPIER — PUSIGNAN
   Application SUAP
========================================================= */


/* =========================================================
   DONNÉES FICHES SUAP
========================================================= */

const fichesSUAP = [

    {
        id: "bilan-primaire",
        icon: "🩺",
        titre: "Bilan primaire",
        description: "Évaluation initiale et recherche des détresses vitales.",

        contenu: `
            <div class="fiche-detail">
                <h3>🩺 Bilan primaire</h3>

                <p>
                    Le bilan primaire permet d'identifier rapidement
                    une situation pouvant engager le pronostic vital.
                </p>

                <h4>Points à rechercher</h4>

                <ul>
                    <li>État de conscience.</li>
                    <li>Respiration.</li>
                    <li>Circulation.</li>
                    <li>Hémorragie importante.</li>
                    <li>Risques liés à l'environnement.</li>
                </ul>

                <h4>À noter</h4>

                <p>
                    Toute anomalie constatée doit être prise en compte
                    dans la suite de la prise en charge et de la transmission.
                </p>

                <div class="fiche-note">
                    <p>
                        Les conduites précises sont à appliquer conformément
                        à la formation et aux procédures opérationnelles en vigueur.
                    </p>
                </div>
            </div>
        `
    },


    {
        id: "constantes",
        icon: "❤️",
        titre: "Constantes",
        description: "Paramètres physiologiques à relever et surveiller.",

        contenu: `
            <div class="fiche-detail">
                <h3>❤️ Constantes</h3>

                <p>
                    Les constantes permettent d'objectiver l'état de la victime
                    et son évolution au cours de la prise en charge.
                </p>

                <h4>Paramètres</h4>

                <ul>
                    <li>Fréquence cardiaque — FC.</li>
                    <li>Fréquence respiratoire — FR.</li>
                    <li>Saturation pulsée en oxygène — SpO₂.</li>
                    <li>Pression artérielle — TA.</li>
                    <li>Température.</li>
                    <li>Évaluation de la douleur.</li>
                </ul>

                <h4>Surveillance</h4>

                <p>
                    Une valeur isolée doit être interprétée avec le contexte
                    clinique. La répétition des constantes permet notamment
                    de suivre l'évolution de la victime.
                </p>

                <div class="fiche-note">
                    <p>
                        Les valeurs de référence et seuils d'alerte doivent être
                        utilisés selon l'âge, le contexte et les procédures en vigueur.
                    </p>
                </div>
            </div>
        `
    },


    {
        id: "detresse-respiratoire",
        icon: "🫁",
        titre: "Détresse respiratoire",
        description: "Recherche des signes de difficulté respiratoire.",

        contenu: `
            <div class="fiche-detail">
                <h3>🫁 Détresse respiratoire</h3>

                <h4>Signes à rechercher</h4>

                <ul>
                    <li>Dyspnée ou difficulté à respirer.</li>
                    <li>Augmentation de la fréquence respiratoire.</li>
                    <li>Respiration anormale ou bruyante.</li>
                    <li>Difficulté à parler.</li>
                    <li>Cyanose éventuelle.</li>
                    <li>Agitation ou altération de conscience.</li>
                    <li>Signes de lutte respiratoire.</li>
                </ul>

                <h4>Évaluation</h4>

                <ul>
                    <li>Observer la respiration.</li>
                    <li>Évaluer la FR.</li>
                    <li>Mesurer la SpO₂ si disponible et pertinente.</li>
                    <li>Rechercher le contexte d'apparition.</li>
                    <li>Surveiller l'évolution.</li>
                </ul>

                <div class="fiche-note">
                    <p>
                        Toute détresse respiratoire doit être évaluée et
                        transmise conformément aux procédures en vigueur.
                    </p>
                </div>
            </div>
        `
    },


    {
        id: "conscience",
        icon: "🧠",
        titre: "Troubles de conscience",
        description: "Évaluation de l'état neurologique et de son évolution.",

        contenu: `
            <div class="fiche-detail">
                <h3>🧠 Troubles de conscience</h3>

                <h4>À rechercher</h4>

                <ul>
                    <li>Réponse spontanée.</li>
                    <li>Orientation et comportement.</li>
                    <li>Réponse aux sollicitations.</li>
                    <li>Évolution de l'état de conscience.</li>
                    <li>Contexte de survenue.</li>
                </ul>

                <h4>Informations utiles</h4>

                <ul>
                    <li>Antécédents connus.</li>
                    <li>Traitements.</li>
                    <li>Événement précédant le trouble.</li>
                    <li>Dernière fois où la victime était normale.</li>
                </ul>

                <div class="fiche-note">
                    <p>
                        Une modification de la conscience est un élément
                        important à surveiller et à transmettre.
                    </p>
                </div>
            </div>
        `
    },


    {
        id: "hemorragie",
        icon: "🩸",
        titre: "Hémorragie",
        description: "Recherche et surveillance des saignements importants.",

        contenu: `
            <div class="fiche-detail">
                <h3>🩸 Hémorragie</h3>

                <h4>Évaluation</h4>

                <ul>
                    <li>Localiser le saignement.</li>
                    <li>Évaluer son importance.</li>
                    <li>Rechercher plusieurs sources de saignement.</li>
                    <li>Rechercher les signes de retentissement.</li>
                    <li>Surveiller l'évolution.</li>
                </ul>

                <h4>Transmission</h4>

                <p>
                    Préciser le siège, le mécanisme éventuel, l'évolution
                    et les gestes réalisés.
                </p>

                <div class="fiche-note">
                    <p>
                        Les gestes de contrôle d'une hémorragie sont ceux
                        enseignés dans la formation et prévus par les procédures
                        opérationnelles en vigueur.
                    </p>
                </div>
            </div>
        `
    },


    {
        id: "arret-cardiaque",
        icon: "❤️‍🩹",
        titre: "Arrêt cardiaque / RCP",
        description: "Reconnaissance et prise en charge d'un arrêt cardiaque.",

        contenu: `
            <div class="fiche-detail">
                <h3>❤️‍🩹 Arrêt cardiaque / RCP</h3>

                <h4>Reconnaissance</h4>

                <ul>
                    <li>Victime inconsciente.</li>
                    <li>Absence de respiration normale.</li>
                    <li>Situation nécessitant une réaction immédiate.</li>
                </ul>

                <h4>Principes</h4>

                <ul>
                    <li>Alerter / faire alerter.</li>
                    <li>Débuter la réanimation selon la formation.</li>
                    <li>Mettre en œuvre le DAE dès que disponible.</li>
                    <li>Suivre les indications du DAE.</li>
                    <li>Assurer la continuité de la prise en charge.</li>
                </ul>

                <div class="fiche-note">
                    <p>
                        En situation réelle, appliquer les procédures et
                        l'organisation opérationnelle en vigueur.
                    </p>
                </div>
            </div>
        `
    },


    {
        id: "dae",
        icon: "⚡",
        titre: "DAE",
        description: "Utilisation du défibrillateur automatisé externe.",

        contenu: `
            <div class="fiche-detail">
                <h3>⚡ DAE</h3>

                <h4>Principe</h4>

                <p>
                    Le DAE analyse le rythme cardiaque et indique,
                    lorsque cela est nécessaire, la conduite à suivre.
                </p>

                <h4>Points importants</h4>

                <ul>
                    <li>Mettre en place le DAE dès que possible.</li>
                    <li>Suivre les instructions vocales et visuelles.</li>
                    <li>Ne pas toucher la victime pendant l'analyse.</li>
                    <li>Respecter les consignes lors d'une éventuelle délivrance de choc.</li>
                    <li>Poursuivre la prise en charge selon les indications.</li>
                </ul>
            </div>
        `
    },


    {
        id: "traumatologie",
        icon: "🦴",
        titre: "Traumatologie",
        description: "Évaluation d'une victime traumatisée.",

        contenu: `
            <div class="fiche-detail">
                <h3>🦴 Traumatologie</h3>

                <h4>Rechercher</h4>

                <ul>
                    <li>Mécanisme du traumatisme.</li>
                    <li>Points d'impact.</li>
                    <li>Douleurs.</li>
                    <li>Déformations.</li>
                    <li>Plaies ou saignements.</li>
                    <li>Troubles neurologiques éventuels.</li>
                    <li>Évolution depuis l'accident.</li>
                </ul>

                <h4>Mécanisme</h4>

                <p>
                    Le mécanisme permet d'orienter la recherche des lésions
                    potentielles et doit être pris en compte dans le bilan.
                </p>
            </div>
        `
    },


    {
        id: "accident-circulation",
        icon: "🚗",
        titre: "Accident de circulation",
        description: "Évaluation initiale d'un accident de circulation.",

        contenu: `
            <div class="fiche-detail">
                <h3>🚗 Accident de circulation</h3>

                <h4>Avant le bilan victime</h4>

                <ul>
                    <li>Sécurité de la zone.</li>
                    <li>Risques liés aux véhicules.</li>
                    <li>Nombre de victimes.</li>
                    <li>Énergies et mécanisme de l'accident.</li>
                    <li>Risques secondaires.</li>
                </ul>

                <h4>Pour chaque victime</h4>

                <ul>
                    <li>État de conscience.</li>
                    <li>Respiration.</li>
                    <li>Circulation.</li>
                    <li>Lésions visibles.</li>
                    <li>Douleur et localisation.</li>
                    <li>Évolution.</li>
                </ul>
            </div>
        `
    },


    {
        id: "chute",
        icon: "🤕",
        titre: "Chute",
        description: "Évaluation d'une victime après une chute.",

        contenu: `
            <div class="fiche-detail">
                <h3>🤕 Chute</h3>

                <h4>Questions importantes</h4>

                <ul>
                    <li>De quelle hauteur la victime est-elle tombée ?</li>
                    <li>Sur quelle surface ?</li>
                    <li>Quelle zone a reçu l'impact ?</li>
                    <li>Y a-t-il eu perte de connaissance ?</li>
                    <li>La victime peut-elle se rappeler de l'événement ?</li>
                    <li>Quelles douleurs sont présentes ?</li>
                </ul>

                <h4>Surveillance</h4>

                <p>
                    Rechercher les signes traumatiques et neurologiques
                    et surveiller l'évolution de la victime.
                </p>
            </div>
        `
    },


    {
        id: "brulures",
        icon: "🔥",
        titre: "Brûlures",
        description: "Évaluation d'une brûlure et recherche des risques associés.",

        contenu: `
            <div class="fiche-detail">
                <h3>🔥 Brûlures</h3>

                <h4>Évaluer</h4>

                <ul>
                    <li>Origine de la brûlure.</li>
                    <li>Localisation.</li>
                    <li>Étendue.</li>
                    <li>Aspect.</li>
                    <li>Douleur.</li>
                    <li>Atteinte éventuelle du visage ou des voies respiratoires.</li>
                </ul>

                <h4>Contexte</h4>

                <ul>
                    <li>Thermique.</li>
                    <li>Chimique.</li>
                    <li>Électrique.</li>
                    <li>Inhalation de fumées ou produits.</li>
                </ul>

                <div class="fiche-note">
                    <p>
                        La conduite à tenir dépend notamment du mécanisme,
                        de la localisation et de l'étendue de la brûlure.
                    </p>
                </div>
            </div>
        `
    },


    {
        id: "intoxication",
        icon: "☣️",
        titre: "Intoxication",
        description: "Évaluation d'une exposition à une substance.",

        contenu: `
            <div class="fiche-detail">
                <h3>☣️ Intoxication</h3>

                <h4>Informations à rechercher</h4>

                <ul>
                    <li>Produit ou substance concernée.</li>
                    <li>Quantité supposée.</li>
                    <li>Voie d'exposition.</li>
                    <li>Heure de l'exposition.</li>
                    <li>Symptômes.</li>
                    <li>Emballage ou nom du produit si disponible.</li>
                </ul>

                <h4>Sécurité</h4>

                <p>
                    Ne pas exposer les intervenants à la substance.
                    Identifier les risques avant toute action.
                </p>

                <div class="fiche-note">
                    <p>
                        En cas d'exposition toxique, appliquer les procédures
                        opérationnelles et les consignes de régulation adaptées.
                    </p>
                </div>
            </div>
        `
    },


    {
        id: "opqrst",
        icon: "😖",
        titre: "Douleur — OPQRST",
        description: "Méthode structurée d'interrogatoire de la douleur.",

        contenu: `
            <div class="fiche-detail">
                <h3>😖 OPQRST</h3>

                <ul>
                    <li><strong>O — Onset :</strong> début de la douleur.</li>
                    <li><strong>P — Provocation / Palliation :</strong> ce qui provoque ou soulage.</li>
                    <li><strong>Q — Quality :</strong> qualité de la douleur.</li>
                    <li><strong>R — Region / Radiation :</strong> localisation et irradiation.</li>
                    <li><strong>S — Severity :</strong> intensité.</li>
                    <li><strong>T — Time :</strong> durée et évolution.</li>
                </ul>

                <h4>Objectif</h4>

                <p>
                    Obtenir une description structurée et reproductible
                    de la douleur afin d'en suivre l'évolution.
                </p>
            </div>
        `
    },


    {
        id: "sample",
        icon: "📋",
        titre: "SAMPLE",
        description: "Interrogatoire structuré de la victime.",

        contenu: `
            <div class="fiche-detail">
                <h3>📋 SAMPLE</h3>

                <ul>
                    <li><strong>S — Signes / symptômes</strong></li>
                    <li><strong>A — Allergies</strong></li>
                    <li><strong>M — Médicaments</strong></li>
                    <li><strong>P — Passé médical</strong></li>
                    <li><strong>L — Last meal</strong> : dernières prises alimentaires ou informations temporelles utiles.</li>
                    <li><strong>E — Événements</strong> : circonstances ayant précédé la situation.</li>
                </ul>

                <h4>Objectif</h4>

                <p>
                    Recueillir rapidement les informations nécessaires
                    pour comprendre la situation et compléter le bilan.
                </p>
            </div>
        `
    },


    {
        id: "pediatrie",
        icon: "👶",
        titre: "Pédiatrie",
        description: "Points particuliers lors d'une prise en charge pédiatrique.",

        contenu: `
            <div class="fiche-detail">
                <h3>👶 Pédiatrie</h3>

                <h4>À rechercher</h4>

                <ul>
                    <li>Âge et poids si connus.</li>
                    <li>Comportement habituel ou modification.</li>
                    <li>Respiration.</li>
                    <li>État de conscience.</li>
                    <li>Coloration.</li>
                    <li>Alimentation et hydratation.</li>
                    <li>Antécédents et traitements.</li>
                </ul>

                <div class="fiche-note">
                    <p>
                        Les valeurs physiologiques et les conduites de prise
                        en charge chez l'enfant sont dépendantes de l'âge.
                    </p>
                </div>
            </div>
        `
    },


    {
        id: "personne-agee",
        icon: "👴",
        titre: "Personne âgée",
        description: "Éléments à rechercher chez la personne âgée.",

        contenu: `
            <div class="fiche-detail">
                <h3>👴 Personne âgée</h3>

                <h4>Interrogatoire</h4>

                <ul>
                    <li>État habituel.</li>
                    <li>Autonomie.</li>
                    <li>Traitements.</li>
                    <li>Antécédents.</li>
                    <li>Changement récent.</li>
                    <li>Chute éventuelle.</li>
                    <li>Alimentation et hydratation.</li>
                </ul>

                <h4>Attention</h4>

                <p>
                    Une modification brutale du comportement ou de l'état
                    général doit être prise en compte dans l'évaluation.
                </p>
            </div>
        `
    },


    {
        id: "malaise",
        icon: "🌡️",
        titre: "Malaise",
        description: "Recherche des circonstances et signes associés.",

        contenu: `
            <div class="fiche-detail">
                <h3>🌡️ Malaise</h3>

                <h4>Questions</h4>

                <ul>
                    <li>Que s'est-il passé ?</li>
                    <li>Quand les symptômes ont-ils commencé ?</li>
                    <li>Y a-t-il eu perte de connaissance ?</li>
                    <li>Douleur associée ?</li>
                    <li>Antécédents ?</li>
                    <li>Traitements ?</li>
                    <li>Évolution depuis le début ?</li>
                </ul>

                <h4>Constantes</h4>

                <p>
                    Relever les constantes pertinentes et surveiller leur évolution.
                </p>
            </div>
        `
    },


    {
        id: "avc",
        icon: "🧠",
        titre: "AVC",
        description: "Recherche de signes évocateurs d'un accident neurologique.",

        contenu: `
            <div class="fiche-detail">
                <h3>🧠 AVC</h3>

                <h4>Signes à rechercher</h4>

                <ul>
                    <li>Asymétrie du visage.</li>
                    <li>Déficit moteur d'un membre ou d'un côté.</li>
                    <li>Faire le FAST : Face, Arm, Speech, Time.</li>
                    <li>Trouble de la parole.</li>
                    <li>Trouble soudain de la compréhension.</li>
                    <li>Autres signes neurologiques soudains.</li>
                </ul>

                <h4>Information essentielle</h4>

                <p>
                    Rechercher précisément l'heure de début des signes
                    ou la dernière heure connue sans symptôme.
                </p>

                <div class="fiche-note">
                    <p>
                        Toute suspicion d'AVC nécessite une prise en charge
                        et une transmission adaptées selon les procédures en vigueur.
                    </p>
                </div>
            </div>
        `
    },


    {
        id: "douleur-thoracique",
        icon: "❤️",
        titre: "Douleur thoracique",
        description: "Évaluation structurée d'une douleur thoracique.",

        contenu: `
            <div class="fiche-detail">
                <h3>❤️ Douleur thoracique</h3>

                <h4>Rechercher</h4>

                <ul>
                    <li>Début et durée.</li>
                    <li>Localisation.</li>
                    <li>Irradiation.</li>
                    <li>Type de douleur.</li>
                    <li>Intensité.</li>
                    <li>Facteurs déclenchants ou calmants.</li>
                    <li>Signes associés.</li>
                </ul>

                <h4>Constantes</h4>

                <p>
                    Relever les constantes pertinentes et surveiller
                    toute évolution clinique.
                </p>

                <div class="fiche-note">
                    <p>
                        Utiliser OPQRST pour structurer l'interrogatoire
                        et transmettre les éléments importants.
                    </p>
                </div>
            </div>
        `
    },


    {
        id: "detresse-circulatoire",
        icon: "🫀",
        titre: "Détresse circulatoire",
        description: "Recherche des signes de mauvaise perfusion.",

        contenu: `
            <div class="fiche-detail">
                <h3>🫀 Détresse circulatoire</h3>

                <h4>Signes à rechercher</h4>

                <ul>
                    <li>Altération de la conscience.</li>
                    <li>Pâleur.</li>
                    <li>Extrémités froides.</li>
                    <li>Transpiration inhabituelle.</li>
                    <li>Modification de la fréquence cardiaque.</li>
                    <li>Modification de la pression artérielle.</li>
                </ul>

                <h4>Surveillance</h4>

                <p>
                    Réévaluer régulièrement l'état clinique et les constantes
                    selon la situation.
                </p>
            </div>
        `
    },


    {
        id: "choc-hypovolemie",
        icon: "🩸",
        titre: "Choc / hypovolémie",
        description: "Recherche de signes associés à une perte de volume circulant.",

        contenu: `
            <div class="fiche-detail">
                <h3>🩸 Choc / hypovolémie</h3>

                <h4>Contextes possibles</h4>

                <ul>
                    <li>Hémorragie importante.</li>
                    <li>Traumatisme.</li>
                    <li>Perte liquidienne importante.</li>
                    <li>Autres causes selon le contexte clinique.</li>
                </ul>

                <h4>À surveiller</h4>

                <ul>
                    <li>Conscience.</li>
                    <li>Fréquence cardiaque.</li>
                    <li>Pression artérielle.</li>
                    <li>Respiration.</li>
                    <li>Coloration et température des extrémités.</li>
                    <li>Évolution générale.</li>
                </ul>
            </div>
        `
    },


    {
        id: "oxygenotherapie",
        icon: "🌬️",
        titre: "Oxygénothérapie",
        description: "Rappel général sur l'administration d'oxygène.",

        contenu: `
            <div class="fiche-detail">
                <h3>🌬️ Oxygénothérapie</h3>

                <p>
                    L'oxygénothérapie consiste à administrer de l'oxygène
                    à une personne lorsque cela est indiqué.
                </p>

                <h4>À surveiller</h4>

                <ul>
                    <li>État clinique.</li>
                    <li>Respiration.</li>
                    <li>SpO₂ lorsque disponible.</li>
                    <li>Tolérance du dispositif.</li>
                    <li>Évolution de la situation.</li>
                </ul>

                <div class="fiche-note">
                    <p>
                        Le dispositif, le débit et les indications doivent
                        être déterminés conformément à la formation et aux
                        procédures en vigueur.
                    </p>
                </div>
            </div>
        `
    },


    {
        id: "materiel",
        icon: "🧰",
        titre: "Matériel SUAP",
        description: "Principales familles de matériel utilisées en SUAP.",

        contenu: `
            <div class="fiche-detail">
                <h3>🧰 Matériel SUAP</h3>

                <h4>Familles de matériel</h4>

                <ul>
                    <li>Protection individuelle.</li>
                    <li>Évaluation et surveillance.</li>
                    <li>Oxygénothérapie et ventilation.</li>
                    <li>Hémorragies et pansements.</li>
                    <li>Immobilisation.</li>
                    <li>Brancardage et transport.</li>
                    <li>Réanimation et DAE.</li>
                    <li>Hygiène et gestion des déchets.</li>
                </ul>

                <div class="fiche-note">
                    <p>
                        La dotation exacte dépend du véhicule et de
                        l'organisation du service. Vérifier la dotation
                        réelle du VSAV utilisé.
                    </p>
                </div>
            </div>
        `
    },


    {
        id: "transmission",
        icon: "📡",
        titre: "Transmission du bilan",
        description: "Structurer les informations utiles à transmettre.",

        contenu: `
            <div class="fiche-detail">
                <h3>📡 Transmission du bilan</h3>

                <h4>Informations utiles</h4>

                <ul>
                    <li>Localisation et identification de l'intervention.</li>
                    <li>Motif de prise en charge.</li>
                    <li>État initial de la victime.</li>
                    <li>Constantes relevées.</li>
                    <li>Évolution.</li>
                    <li>Gestes réalisés.</li>
                    <li>Éléments particuliers.</li>
                    <li>Situation et orientation.</li>
                </ul>

                <h4>Organisation 69</h4>

                <p>
                    Le SDMIS et le SAS-SAMU 69 travaillent dans une organisation
                    coordonnée pour le secours et les soins d'urgence aux personnes.
                </p>

                <div class="fiche-note">
                    <p>
                        Le RAA du SDMIS documente notamment la régulation médicale
                        par le SAS-SAMU 69 et la coordination entre les acteurs.
                        Les modalités opérationnelles applicables doivent être
                        celles en vigueur au SDMIS.
                    </p>
                </div>
            </div>
        `
    }


];


/* =========================================================
   INVENTAIRE
========================================================= */

const inventaire = {

    "Immobilisation / transport": [
        "Brancard",
        "Chaise d'évacuation",
        "Plan dur",
        "Matelas immobilisateur",
        "Attelles",
        "Colliers cervicaux",
        "Couvertures"
    ],

    "Oxygène / ventilation": [
        "Bouteille O₂",
        "Masques O₂",
        "BAVU",
        "Masques BAVU",
        "Aspirateur",
        "Matériel de ventilation"
    ],

    "Diagnostic / surveillance": [
        "DAE",
        "Tensiomètre",
        "Oxymètre de pouls",
        "Thermomètre",
        "Stéthoscope",
        "Matériel de mesure glycémique"
    ],

    "Pansements / hémorragies": [
        "Compresses",
        "Pansements",
        "Bandes",
        "Sparadrap",
        "Garrots",
        "Ciseaux"
    ],

    "Hygiène / protection": [
        "Gants",
        "Masques",
        "Lunettes de protection",
        "Solution hydroalcoolique",
        "Sacs déchets"
    ],

    "Divers": [
        "Lampe",
        "Sac de matériel",
        "Matériel de signalisation",
        "Batteries / alimentation",
        "Divers"
    ]

};


/* =========================================================
   VARIABLES
========================================================= */

let etapeActuelle = 1;
let ficheActuelle = null;
function ouvrirInventaire() {
    afficherPage("pageInventaire");
    afficherInventaire();
}


/* =========================================================
   INITIALISATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    chargerProfil();

    afficherFiches();
    afficherInventaire();

    initialiserDateHeure();

});


/* =========================================================
   NAVIGATION PAGES
========================================================= */

function afficherPage(id) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.add("hidden");
    });

    const page = document.getElementById(id);

    if (page) {
        page.classList.remove("hidden");
        window.scrollTo(0, 0);
    }

}


/* =========================================================
   PROFIL
========================================================= */

function chargerProfil() {

    const profil = JSON.parse(
        localStorage.getItem("profilPompier")
    );

    if (!profil) {

        afficherPage("pageProfil");

        return;
    }

    mettreAJourProfil(profil);

    afficherPage("pageAccueil");

}


function enregistrerProfil() {

    const prenom = document
        .getElementById("profilPrenom")
        .value
        .trim();

    const nom = document
        .getElementById("profilNom")
        .value
        .trim();

    const grade = document
        .getElementById("profilGrade")
        .value;

    if (!prenom || !nom || !grade) {

        alert("Merci de compléter tous les champs.");

        return;
    }

    const profil = {
        prenom,
        nom,
        grade
    };

    localStorage.setItem(
        "profilPompier",
        JSON.stringify(profil)
    );

    mettreAJourProfil(profil);

    afficherPage("pageAccueil");

}


function mettreAJourProfil(profil) {

    const nomComplet =
        `${profil.prenom} ${profil.nom}`;

    const bonjour =
        document.getElementById("bonjour");

    const nomAccueil =
        document.getElementById("nomProfilAccueil");

    const gradeAccueil =
        document.getElementById("gradeProfilAccueil");

    if (bonjour) {
        bonjour.textContent =
            `Bonjour ${profil.prenom}`;
    }

    if (nomAccueil) {
        nomAccueil.textContent =
            nomComplet;
    }

    if (gradeAccueil) {
        gradeAccueil.textContent =
            profil.grade;
    }

}


function ouvrirProfil() {

    const profil = JSON.parse(
        localStorage.getItem("profilPompier")
    );

    if (!profil) {

        afficherPage("pageProfil");

        return;
    }

    document.getElementById("editPrenom").value =
        profil.prenom;

    document.getElementById("editNom").value =
        profil.nom;

    document.getElementById("editGrade").value =
        profil.grade;

    afficherPage("pageProfilEdit");

}


function modifierProfil() {

    const profil = {

        prenom:
            document.getElementById("editPrenom")
                .value
                .trim(),

        nom:
            document.getElementById("editNom")
                .value
                .trim(),

        grade:
            document.getElementById("editGrade")
                .value

    };

    if (!profil.prenom || !profil.nom || !profil.grade) {

        alert("Merci de compléter tous les champs.");

        return;
    }

    localStorage.setItem(
        "profilPompier",
        JSON.stringify(profil)
    );

    mettreAJourProfil(profil);

    afficherPage("pageAccueil");

}


/* =========================================================
   ACCUEIL
========================================================= */

function retourAccueil() {

    afficherPage("pageAccueil");

}


function nouveauBilan() {

    afficherPage("pageBilan");

    etapeActuelle = 1;

    afficherEtape();

}


/* =========================================================
   FICHES SUAP
========================================================= */

function ouvrirFiches() {

    afficherPage("pageFiches");

}


function afficherFiches() {

    const container =
        document.getElementById("listeFiches");

    if (!container) return;

    container.innerHTML = "";

    fichesSUAP.forEach(fiche => {

        const button =
            document.createElement("button");

        button.className = "fiche-card";

        button.innerHTML = `
            <div class="fiche-icon">
                ${fiche.icon}
            </div>

            <strong>
                ${fiche.titre}
            </strong>

            <span>
                ${fiche.description}
            </span>
        `;

        button.addEventListener("click", () => {
            ouvrirFiche(fiche.id);
        });

        container.appendChild(button);

    });

}


function ouvrirFiche(id) {

    const fiche =
        fichesSUAP.find(item => item.id === id);

    if (!fiche) return;

    ficheActuelle = fiche;

    document.getElementById("ficheDetailTitre")
        .textContent = fiche.titre;

    document.getElementById("ficheDetailContenu")
        .innerHTML = fiche.contenu;

    afficherPage("pageFicheDetail");

}


function retourFiches() {

    afficherPage("pageFiches");

}


/* =========================================================
   INVENTAIRE
========================================================= */

function afficherInventaire() {

    const container =
        document.getElementById("inventaireContainer");

    if (!container) return;

    const sauvegarde =
        JSON.parse(
            localStorage.getItem("inventaireVSAV") || "{}"
        );

    container.innerHTML = "";

    Object.entries(inventaire).forEach(
        ([categorie, items]) => {

            const category =
                document.createElement("div");

            category.className =
                "inventory-category";

            const titre =
                document.createElement("h3");

            titre.textContent = categorie;

            category.appendChild(titre);

            items.forEach(item => {

                const key =
                    categorie + "_" + item;

                const data =
                    sauvegarde[key] || {
                        checked: false,
                        quantity: ""
                    };

                const row =
                    document.createElement("div");

                row.className =
                    "inventory-item";

                row.innerHTML = `
                    <input
                        type="checkbox"
                        ${data.checked ? "checked" : ""}
                        onchange="sauverInventaire()"
                    >

                    <span>${item}</span>

                    <input
                        class="inventory-quantity"
                        type="number"
                        min="0"
                        placeholder="Qté"
                        value="${data.quantity || ""}"
                        onchange="sauverInventaire()"
                    >
                `;

                row.dataset.key = key;

                category.appendChild(row);

            });

            container.appendChild(category);

        }
    );

}


function sauverInventaire() {

    const sauvegarde = {};

    document.querySelectorAll(".inventory-item")
        .forEach(row => {

            const key = row.dataset.key;

            const checkbox =
                row.querySelector(
                    'input[type="checkbox"]'
                );

            const quantity =
                row.querySelector(
                    ".inventory-quantity"
                );

            sauvegarde[key] = {

                checked:
                    checkbox.checked,

                quantity:
                    quantity.value

            };

        });

    localStorage.setItem(
        "inventaireVSAV",
        JSON.stringify(sauvegarde)
    );

}


/* =========================================================
   DATE / HEURE
========================================================= */

function initialiserDateHeure() {

    const maintenant = new Date();

    const date =
        maintenant.toISOString()
            .split("T")[0];

    const heure =
        maintenant.toTimeString()
            .slice(0, 5);

    const dateInput =
        document.getElementById(
            "dateIntervention"
        );

    const heureInput =
        document.getElementById(
            "heureIntervention"
        );

    if (dateInput) {
        dateInput.value = date;
    }

    if (heureInput) {
        heureInput.value = heure;
    }

}


/* =========================================================
   ÉTAPES DU BILAN
========================================================= */

function allerEtape(numero) {

    etapeActuelle = numero;

    afficherEtape();

}


function afficherEtape() {

    document
        .querySelectorAll(".bilan-step")
        .forEach(step => {

            step.classList.remove("active");

            if (
                Number(step.dataset.step)
                === etapeActuelle
            ) {
                step.classList.add("active");
            }

        });


    document
        .querySelectorAll(".step")
        .forEach((step, index) => {

            step.classList.toggle(
                "active",
                index + 1 === etapeActuelle
            );

        });


    const prev =
        document.getElementById("btnPrev");

    const next =
        document.getElementById("btnNext");

    if (prev) {

        prev.style.visibility =
            etapeActuelle === 1
                ? "hidden"
                : "visible";

    }

    if (next) {

        next.textContent =
            etapeActuelle === 9
                ? "Générer le bilan"
                : "Suivant →";

    }

}


function etapeSuivante() {

    if (etapeActuelle < 9) {

        etapeActuelle++;

        afficherEtape();

        return;
    }

    genererSynthese();

}


function etapePrecedente() {

    if (etapeActuelle <= 1) return;

    etapeActuelle--;

    afficherEtape();

}


/* =========================================================
   UTILITAIRE FORMULAIRE
========================================================= */

function valeur(id) {

    const element =
        document.getElementById(id);

    if (!element) return "";

    return element.value.trim();

}


/* =========================================================
   SYNTHÈSE
========================================================= */

function genererSynthese() {

    const lignes = [];

    lignes.push(
        "BILAN SUAP — PUSIGNAN"
    );

    lignes.push(
        "=============================="
    );

    lignes.push(
        `Date : ${valeur("dateIntervention")}`
    );

    lignes.push(
        `Heure : ${valeur("heureIntervention")}`
    );

    lignes.push(
        `Lieu : ${valeur("lieu")}`
    );

    lignes.push(
        `Type : ${valeur("typeIntervention")}`
    );

    lignes.push(
        `Victimes : ${valeur("nombreVictimes")}`
    );


    lignes.push("");

    lignes.push("VICTIME");

    lignes.push(
        `Nom : ${valeur("victimeNom")}`
    );

    lignes.push(
        `Prénom : ${valeur("victimePrenom")}`
    );

    lignes.push(
        `Âge : ${valeur("victimeAge")}`
    );

    lignes.push(
        `Sexe : ${valeur("victimeSexe")}`
    );

    lignes.push(
        `Motif : ${valeur("motif")}`
    );


    lignes.push("");

    lignes.push("BILAN PRIMAIRE");

    lignes.push(
        `Conscience : ${valeur("conscience")}`
    );

    lignes.push(
        `Respiration : ${valeur("respiration")}`
    );

    lignes.push(
        `Circulation : ${valeur("circulation")}`
    );

    lignes.push(
        `Hémorragie : ${valeur("hemorragie")}`
    );

    lignes.push(
        `Observations : ${valeur("observationsPrimaires")}`
    );


    lignes.push("");

    lignes.push("CONSTANTES");

    lignes.push(
        `FC : ${valeur("fc")} bpm`
    );

    lignes.push(
        `FR : ${valeur("fr")} /min`
    );

    lignes.push(
        `SpO₂ : ${valeur("spo2")} %`
    );

    lignes.push(
        `Température : ${valeur("temperature")} °C`
    );

    lignes.push(
        `TA : ${valeur("ta")} mmHg`
    );

    lignes.push(
        `Douleur : ${valeur("douleur")} /10`
    );


    lignes.push("");

    lignes.push("OPQRST");

    lignes.push(
        `O : ${valeur("opqrstO")}`
    );

    lignes.push(
        `P : ${valeur("opqrstP")}`
    );

    lignes.push(
        `Q : ${valeur("opqrstQ")}`
    );

    lignes.push(
        `R : ${valeur("opqrstR")}`
    );

    lignes.push(
        `S : ${valeur("opqrstS")}`
    );

    lignes.push(
        `T : ${valeur("opqrstT")}`
    );


    lignes.push("");

    lignes.push("SAMPLE");

    lignes.push(
        `S : ${valeur("sampleS")}`
    );

    lignes.push(
        `A : ${valeur("sampleA")}`
    );

    lignes.push(
        `M : ${valeur("sampleM")}`
    );

    lignes.push(
        `P : ${valeur("sampleP")}`
    );

    lignes.push(
        `L : ${valeur("sampleL")}`
    );

    lignes.push(
        `E : ${valeur("sampleE")}`
    );


    lignes.push("");

    lignes.push("BILAN SECONDAIRE");

    lignes.push(
        valeur("bilanSecondaire")
    );

    lignes.push(
        `Autres observations : ${valeur("autresObservations")}`
    );


    lignes.push("");

    lignes.push("GESTES & SURVEILLANCE");

    lignes.push(
        `Gestes : ${valeur("gestes")}`
    );

    lignes.push(
        `Évolution : ${valeur("evolution")}`
    );


    const texte =
        lignes.join("\n");

    document.getElementById("synthese")
        .value = texte;

    return texte;

}


/* =========================================================
   COPIER
========================================================= */

async function copierBilan() {

    const texte =
        genererSynthese();

    try {

        await navigator.clipboard.writeText(
            texte
        );

        alert("Bilan copié dans le presse-papiers.");

    } catch (error) {

        const textarea =
            document.getElementById("synthese");

        textarea.select();

        document.execCommand("copy");

        alert("Bilan copié.");

    }

}


/* =========================================================
   ENREGISTRER BILAN
========================================================= */

function enregistrerBilan() {

    const texte =
        genererSynthese();

    const bilans =
        JSON.parse(
            localStorage.getItem("bilansPompier") || "[]"
        );

    const bilan = {

        id:
            Date.now(),

        date:
            new Date().toLocaleString("fr-FR"),

        victime:
            `${valeur("victimePrenom")} ${valeur("victimeNom")}`
                .trim() || "Victime sans nom",

        lieu:
            valeur("lieu"),

        type:
            valeur("typeIntervention"),

        synthese:
            texte

    };

    bilans.unshift(bilan);

    localStorage.setItem(
        "bilansPompier",
        JSON.stringify(bilans)
    );

    alert("Bilan enregistré.");

    retourAccueil();

}


/* =========================================================
   MES BILANS
========================================================= */

function voirBilans() {

    afficherPage("pageBilans");

    afficherListeBilans();

}


function afficherListeBilans() {

    const container =
        document.getElementById("listeBilans");

    const bilans =
        JSON.parse(
            localStorage.getItem("bilansPompier") || "[]"
        );

    container.innerHTML = "";

    if (!bilans.length) {

        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📋</div>
                <h3>Aucun bilan</h3>
                <p>
                    Tes bilans enregistrés apparaîtront ici.
                </p>
            </div>
        `;

        return;
    }


    const list =
        document.createElement("div");

    list.className = "bilan-list";


    bilans.forEach(bilan => {

        const item =
            document.createElement("div");

        item.className =
            "saved-bilan";

        item.innerHTML = `
            <div>
                <strong>
                    ${escapeHTML(bilan.victime)}
                </strong>

                <small>
                    ${escapeHTML(bilan.date)}
                    ${bilan.lieu
                        ? " • " + escapeHTML(bilan.lieu)
                        : ""}
                </small>
            </div>

            <button
                class="btn-secondary"
                onclick="voirBilan(${bilan.id})"
            >
                Voir
            </button>
        `;

        list.appendChild(item);

    });


    container.appendChild(list);

}


function voirBilan(id) {

    const bilans =
        JSON.parse(
            localStorage.getItem("bilansPompier") || "[]"
        );

    const bilan =
        bilans.find(item => item.id === id);

    if (!bilan) return;

    afficherPage("pageFicheDetail");

    document.getElementById("ficheDetailTitre")
        .textContent = "Bilan enregistré";

    document.getElementById("ficheDetailContenu")
        .innerHTML = `
            <div class="fiche-detail">

                <h3>
                    ${escapeHTML(bilan.victime)}
                </h3>

                <p>
                    ${escapeHTML(bilan.date)}
                </p>

                <pre style="
                    white-space:pre-wrap;
                    color:#e7e9ed;
                    line-height:1.6;
                    margin-top:20px;
                    font-family:Arial, sans-serif;
                ">${escapeHTML(bilan.synthese)}</pre>

            </div>
        `;

}


function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}