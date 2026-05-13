/**
 * translations.js
 * ───────────────
 * All UI strings for the MTM Newcomers Survey, keyed by language code.
 * Source text copied verbatim from the archived per-language HTML pages.
 *
 * Each entry contains:
 *   langValue              – value sent to the backend
 *   title                  – page <h1>
 *   intro                  – intro paragraph
 *   highlight              – eligibility callout
 *   phoneLabel             – label above phone input
 *   emailLabel             – label above email input
 *   confirmEmailLabel      – label above confirm-email input
 *   phonePlaceholder       – placeholder inside phone input
 *   emailPlaceholder       – placeholder inside email input
 *   confirmEmailPlaceholder – placeholder inside confirm-email input
 *   heardLabel             – label for "how did you hear" dropdown
 *   heardDefault           – default/blank option text
 *   heardOptions[]         – dropdown choices
 *   error                  – general validation error
 *   emailMismatchError     – email ≠ confirm email  (EN only; others fall back)
 *   invalidPhoneError      – bad phone              (EN only; others fall back)
 *   invalidEmailError      – bad email              (EN only; others fall back)
 *   antiSpamError          – too-fast submission     (EN only; others fall back)
 *   submit                 – submit button text
 *   success                – confirmation message
 *   faqTitle               – FAQ section heading
 *   faq[]                  – array of [question, answer] pairs
 */

window.SURVEY_I18N = {

  /* ═══════════════════════════════════════════════════════════════════════════
     ENGLISH
     ═══════════════════════════════════════════════════════════════════════════ */
  en: {
    langValue: 'english',
    title: 'MTM Newcomers Survey',
    intro: 'If you have arrived in Canada in the past 5 years, please take part in the MTM Newcomers survey by filling out your preferred method of contact below. At the end of the survey, you will be redirected to the LEO platform where some of your contact information will be requested.',
    highlight: 'In order to be eligible to receive the $10 prepaid card, you must provide a valid phone number and address in Canada.',

    phoneLabel: 'Phone Number',
    emailLabel: 'Email Address',
    confirmEmailLabel: 'Confirm Email Address',
    phonePlaceholder: 'Phone Number',
    emailPlaceholder: 'Email Address',
    confirmEmailPlaceholder: 'Confirm Email Address',
    phonePlaceholderLong: 'e.g. 416-555-0123',
    emailPlaceholderLong: 'e.g. name@example.com',
    confirmEmailPlaceholderLong: 'e.g. name@example.com',

    heardLabel: 'How did you hear about the MTM Newcomers survey?',
    heardDefault: '-- Select --',
    heardOptions: [
      'Refugee 613',
      'Another settlement organization',
      'Community Event (e.g. Newcomers Day)',
      'Family or Friends',
      'Social Media',
      'Other',
      "Don't know"
    ],

    error: 'ERROR – You need to provide your phone number and email address in the fields.',
    emailMismatchError: 'ERROR – Email addresses do not match.',
    invalidPhoneError: 'ERROR – Please enter a valid 10-digit phone number.',
    invalidEmailError: 'ERROR – Please enter a valid email address.',
    antiSpamError: 'Please wait a moment and try again.',
    submit: 'Submit',
    success: 'Thank you for providing your information! You now have registered to take part in the MTM Newcomers survey. You will be contacted soon.',

    faqTitle: 'Frequently Asked Question',
    faq: [
      ['What is this survey?',
       'MTM Newcomers is the only media and technology survey on newcomers in Canada. It focuses on people who have come to Canada within the last 5 years and helps to understand how newcomers watch TV and video, listen to music, connect with friends and family, and get their news. It will be conducted in 12 different languages: English, French, Tagalog, Cantonese, Mandarin, Punjabi, Arabic, Spanish, Amharic, Hindi, Ukrainian and Swahili.'],
      ['Who is doing this survey?',
       'MTM Newcomers is part of the Media Technology Monitor (MTM). The MTM is the highest quality media study in Canada. Over the past 15 years, the MTM has spoken with over 300,000 Canadians, making it the most accurate and comprehensive media technology tracking survey of its kind.'],
      ['Will my responses stay private?',
       'Yes. MTM is a property of CBC/Radio-Canada and your answers will stay private. Your personal information will not be shared with anyone else and you will not be sold anything or contacted again after you finish this survey. Your personal information will not be sold or shared and your name will not be connected to the survey results nor to any future surveys.'],
      ['How would I complete this survey?',
       'This is an online survey. You may choose to receive the link to complete the survey via text message or email. Once you let us know how you would like to be contacted, within 48 hours you will receive a message asking you to complete the survey. Then, you just click on the link and answer the online survey in the language you choose. You can complete it on your phone, on a tablet or a computer.'],
      ['How long will it take?',
       'It takes 10 to 15 minutes.'],
      ['Will there be any incentives provided?',
       'Yes. After completing the survey, you will receive an online gift card worth $10 from Mastercard, which you can use anywhere.'],
      ['Why should I participate?',
       'The general MTM Survey has been conducted every year for 15 years, but this is the first time a study this large has ever focused on newcomers and media in Canada. By completing this survey, you are playing a very important role in helping to give newcomers a voice and making their practices better understood by policymakers and media companies.'],
      ['What will the data be used for?',
       'Government and private sector organizations will use the findings from the MTM Newcomer survey. For example, findings from this survey will help the Canadian government have a more accurate picture of newcomers as a group and their technology usage, such as internet access, ownership of cell phones, subscription to cable, social media and TV consumption. This will inform better policies and improve how they communicate information to you and other newcomers on topics such as public health, immigration, and settlement. It will also help social services and media companies develop better strategies for creating content and sharing news and information that is relevant and convenient for newcomers.']
    ]
  },

  /* ═══════════════════════════════════════════════════════════════════════════
     FRENCH
     ═══════════════════════════════════════════════════════════════════════════ */
  fr: {
    langValue: 'français',
    title: 'Sondage OTM Nouveaux arrivants',
    intro: "Si vous êtes arrivé au Canada au cours des cinq dernières années, nous vous invitons à répondre au sondage OTM Nouveaux arrivants en indiquant votre méthode de contact préférée ci-dessous. A la fin de l'enquête, vous serez redirigé vers la plateforme LEO où certaines de vos coordonnées vous seront demandées.",
    highlight: "Afin d'être éligible à recevoir la carte prépayée de 10$, vous devez fournir un numéro de téléphone et une adresse valide au Canada.",

    phoneLabel: 'Numéro de téléphone',
    emailLabel: 'Adresse courriel',
    confirmEmailLabel: "Confirmer l'adresse courriel",
    phonePlaceholder: 'Numéro de téléphone',
    emailPlaceholder: 'Adresse courriel',
    confirmEmailPlaceholder: "Confirmer l'adresse courriel",
    phonePlaceholderLong: 'e.g. 416-555-0123',
    emailPlaceholderLong: 'e.g. name@example.com',
    confirmEmailPlaceholderLong: 'e.g. name@example.com',

    heardLabel: "Comment avez-vous entendu parler du sondage de l'OTM au sujet des nouveaux arrivants?",
    heardDefault: '-- Sélectionner --',
    heardOptions: [
      'Refuge 613',
      "Un autre organisme d'aide à l'installation",
      'Événement communautaire (par exemple, la Journée des nouveaux arrivants)',
      'Famille ou amis',
      'Réseaux sociaux',
      'Autre',
      'Je ne sais pas'
    ],

    error: 'Vous devez fournir votre numéro de téléphone et adresse courriel dans les champs ci-dessus.',
    submit: 'Soumettre',
    success: 'Merci de nous avoir transmis vos renseignements! Vous êtes maintenant inscrit pour prendre part au sondage OTM Nouveaux arrivants. Nous communiquerons avec vous bientôt.',

    faqTitle: 'Foire aux questions',
    faq: [
      ['En quoi consiste ce sondage?',
       "L'OTM Nouveaux arrivants est le seul sondage sur les médias et les technologies mené auprès de nouveaux arrivants au Canada. Il porte sur les personnes qui sont arrivées au Canada au cours des cinq (5) dernières années et vise à mieux comprendre comment les nouveaux arrivants regardent la télévision et les contenus vidéo, écoutent de la musique, échangent avec leurs amis et leur famille, et s'informent. Ce sondage sera réalisé dans douze langues différentes, dont le français, l'anglais, le tagalog, le cantonais, le mandarin, le pendjabi, l'amharic, le sawhili, l'hindi, l'arabe, l'espagnol et l'ukrainien."],
      ['Qui réalisera ce sondage ?',
       "L'OTM Nouveaux arrivants fait partie de l'Observateur des technologies médias (OTM). Au Canada, l'OTM est l'outil de recherche sur les médias le plus évolué. L'OTM a sondé plus de 300 000 Canadiens au cours des quinze dernières années, ce qui en fait l'enquête de suivi sur les technologies médias la plus précise et complète qui soit."],
      ['Mes réponses resteront-elles confidentielles?',
       "Oui. L'OTM est la propriété de CBC/Radio-Canada et vos réponses resteront confidentielles. On ne communiquera pas vos renseignements personnels avec qui que ce soit, on n'essaiera pas de vous vendre quoi que ce soit et on ne communiquera pas avec vous une fois que vous aurez répondu au sondage. Vos renseignements personnels ne seront ni vendus ni communiqués à qui que ce soit et votre nom ne sera pas associé aux résultats du sondage ni conservé pour tout autre sondage futur."],
      ['Comment dois-je répondre à ce sondage?',
       "Il s'agit d'un sondage en ligne. Vous pouvez choisir de recevoir un hyperlien par messagerie texte ou par courriel pour y répondre. Une fois que vous nous aurez fait part de votre préférence, vous recevrez dans les 48 heures un message vous demandant de répondre au sondage. Il vous suffira ensuite de cliquer sur le lien et de répondre au sondage en ligne dans la langue de votre choix. Vous pourrez le faire sur votre téléphone, sur votre tablette ou sur votre ordinateur."],
      ['Combien de temps vous faudra-t-il?',
       'De 10 à 15 minutes.'],
      ['Des incitatifs sont-ils prévus pour les répondants?',
       'Oui. Après avoir répondu au sondage, vous recevrez par voie électronique une carte-cadeau Mastercard de 10 $, que vous pourrez utiliser comme bon vous semble.'],
      ['Pour quelle raison devrais-je participer?',
       "Le sondage général de l'OTM a lieu tous les ans depuis 15 ans, mais c'est la première fois qu'une étude aussi importante porte sur les nouveaux arrivants et les médias au Canada. En répondant à ce sondage, vous jouez un rôle très important pour donner une voix aux nouveaux arrivants et mieux faire connaître leurs comportements aux décideurs politiques et aux entreprises médiatiques."],
      ['À quoi serviront les données recueillies?',
       "Les réponses au sondage OTM Nouveaux arrivants serviront au gouvernement et à des organisations du secteur privé. Par exemple, vos réponses aideront le gouvernement canadien à avoir une idée plus précise des nouveaux arrivants en tant que groupe et de l'utilisation qu'ils font des technologies comme l'Internet, les téléphones intelligents, les services sur abonnement au câble, les médias sociaux et la consommation de contenus télévisuels. Ces données permettront d'adopter de meilleures politiques et d'améliorer la façon de vous communiquer ainsi qu'aux autres nouveaux arrivants de l'information sur des sujets comme la santé publique, l'immigration, et l'installation au pays. Ces données aideront aussi les services sociaux et les entreprises médiatiques à développer de meilleures stratégies pour créer du contenu et partager des nouvelles et de l'information pertinentes et pratiques pour les nouveaux arrivants."]
    ]
  },

  /* ═══════════════════════════════════════════════════════════════════════════
     SPANISH
     ═══════════════════════════════════════════════════════════════════════════ */
  es: {
    langValue: 'spanish',
    title: 'Encuesta de MTM Newcomers',
    intro: 'Si llegaste a Canadá en los últimos 5 años, por favor se parte de la encuesta MTM Newcomers y selecciona el método por el que prefieres ser contactado. Al final de la encuesta, serás redirigido a la plataforma LEO donde se te solicitará parte de tu información de contacto.',
    highlight: 'Para ser elegible y poder recibir la tarjeta de prepago de $10, deberás proporcionar un número de teléfono y una dirección válidos en Canadá.',

    phoneLabel: 'Número de teléfono',
    emailLabel: 'Correo electrónico',
    confirmEmailLabel: 'Confirmar correo electrónico',
    phonePlaceholder: 'Número de teléfono',
    emailPlaceholder: 'Correo electrónico',
    confirmEmailPlaceholder: 'Confirmar correo electrónico',
    phonePlaceholderLong: 'e.g. 416-555-0123',
    emailPlaceholderLong: 'e.g. name@example.com',
    confirmEmailPlaceholderLong: 'e.g. name@example.com',

    heardLabel: '¿Cómo se enteró de la encuesta de MTM para recién llegados?',
    heardDefault: '-- Seleccionar --',
    heardOptions: [
      'Refugiado 613',
      'Otra organización de acogida',
      'Evento comunitario (p. ej., Día de los recién llegados)',
      'Familia o amigos',
      'Redes sociales',
      'Otro',
      'No lo sé'
    ],

    error: 'ERROR- Necesitas agregar tu número de teléfono y correo electrónico en los campos seleccionado.',
    submit: 'Enviar',
    success: '¡Gracias por proporcionar su información! Se ha registrado para participar en la encuesta MTM Newcomers y será contactado pronto.',

    faqTitle: 'Preguntas Frecuentes',
    faq: [
      ['¿Sobre qué es esta encuesta?',
       'MTM Newcomers es la única encuesta sobre el uso de los medios de comunicación y manejo de la tecnología de las personas recién llegadas a Canadá. Esta encuesta se enfoca en personas que se mudaron a Canadá en los últimos 5 años, y también ayuda a entender de qué manera estas personas ven televisión y video, escuchan música, se conectan con amigos y familia, y reciben noticias. Se llevará a cabo en 12 idiomas diferentes: inglés, francés, tagalo, cantonés, mandarín, punyabí, árabe, español, hindi, suajili, ucraniano y amárico.'],
      ['¿Quién está realizando esta encuesta?',
       'MTM Newcomers es parte del Media Technology Monitor (MTM). El MTM es el estudio sobre medios de comunicación de la más alta calidad en Canadá. Durante los últimos 15 años, el MTM ha hablado con más de 300 mil canadienses, lo que la convierte en la encuesta de seguimiento sobre el uso de los medios de comunicación y manejo de la tecnología más completa y precisa de su tipo.'],
      ['¿Mis respuestas permanecerán privadas?',
       'Sí. MTM es propiedad de CBC/Radio-Canadá y sus respuestas permanecerán privadas. Su información personal no se compartirá con nadie, no se le venderá ningún producto o servicio, ni se le contactará de nuevo al finalizar esta encuesta. Su información personal no será vendida ni compartida con nadie, y su nombre no se relacionará con los resultados de la encuesta ni con ninguna encuesta futura.'],
      ['¿Cómo realizaré esta encuesta?',
       'Esta encuesta es en línea, usted tendrá la opción de completarla a través de un enlace, ya sea por mensaje de texto o correo electrónico. Dentro de las siguientes 48 horas de que nos haya informado de la manera en la que le gustaría ser contactado; usted recibirá un mensaje con las instrucciones para poder completar satisfactoriamente la encuesta. Después de esto, simplemente haga click en el enlace y conteste la encuesta en línea, en el idioma de su preferencia. Puede completarla en su teléfono, tablet o computadora.'],
      ['¿Cuánto tiempo me tomará completarla?',
       'La encuesta puede tomarle de 10 a 15 minutos.'],
      ['¿Se me proporcionará algún incentivo?',
       'Sí, al completar la encuesta usted recibirá una tarjeta de regalo electrónica Mastercard con valor de $10 que puede utilizar en donde desee.'],
      ['¿Por qué debo participar?',
       'La encuesta general del MTM se realiza cada año desde hace 15 años; sin embargo, esta es la primera vez que un estudio de tal magnitud se enfoca en las personas recién llegadas a Canadá y su uso de los medios de comunicación. Al completar la encuesta, usted está jugando un papel importante para darle voz a la gente recién llegada, y que las empresas de medios y los que elaboran políticas entiendan sus prácticas.'],
      ['¿Para qué se usará la información?',
       'El gobierno y las organizaciones del sector privado utilizarán los resultados de la encuesta del MTM Newcomers para tener una idea más precisa de las personas recién llegadas a Canadá, como grupo, y su uso de la tecnología, tal como es el acceso a internet, la adquisición de teléfonos celulares, la subscripción a cable, el uso de redes sociales y el consumo de la TV. Esto hará que se elaboren mejores políticas y que se mejore la manera en la que le comunican información a usted, y a otras personas recién llegadas, en temas de salud pública, inmigración y asentamiento. También ayudará a que los servicios sociales y las empresas de medios, desarrollen mejores estrategias para crear contenido y compartir noticias e información relevante y adecuada para las personas recién llegadas a Canadá.']
    ]
  },

  /* ═══════════════════════════════════════════════════════════════════════════
     PUNJABI
     ═══════════════════════════════════════════════════════════════════════════ */
  pj: {
    langValue: 'punjabi',
    title: 'ਐਮਟੀਐਮ ਨਵੇਂ ਆਏ ਸਰਵੇਖਣ',
    intro: "ਜੇ ਤੁਸੀਂ ਪਿਛਲੇ 5 ਸਾਲਾਂ ਵਿਚ ਕੈਨੇਡਾ ਪਹੁੰਚੇ ਹੋ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ ਹੇਠਾਂ ਦਿੱਤੇ ਆਪਣੀ ਪਸੰਦ ਦੇ ਤਰੀਕੇ ਨੂੰ ਭਰ ਕੇ ਐਮਟੀਐਮ ਨਵੇਂ ਆਏ ਸਰਵੇਖਣ ਵਿਚ ਹਿੱਸਾ ਲਓ। ਸਰਵੇਖਣ ਦੇ ਅੰਤ 'ਤੇ, ਤੁਹਾਨੂੰ LEO ਪਲੇਟਫਾਰਮ 'ਤੇ ਭੇਜਿਆ ਜਾਵੇਗਾ ਜਿੱਥੇ ਤੁਹਾਡੀ ਕੁਝ ਸੰਪਰਕ ਜਾਣਕਾਰੀ ਲਈ ਬੇਨਤੀ ਕੀਤੀ ਜਾਵੇਗੀ।",
    highlight: '$10 ਦਾ ਪ੍ਰੀਪੇਡ ਕਾਰਡ ਪ੍ਰਾਪਤ ਕਰਨ ਦੇ ਯੋਗ ਹੋਣ ਲਈ, ਇਹ ਜ਼ਰੂਰੀ ਹੈ ਕਿ ਤੁਸੀਂ ਕੈਨੇਡਾ ਵਿੱਚ ਇੱਕ ਵੈਧ ਫੋਨ ਨੰਬਰ ਅਤੇ ਪਤਾ ਪ੍ਰਦਾਨ ਕਰੋ।',

    phoneLabel: 'ਫੋਨ ਨੰਬਰ',
    emailLabel: 'ਈਮੇਲ ਖਾਤਾ',
    confirmEmailLabel: 'ਈਮੇਲ ਖਾਤੇ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ',
    phonePlaceholder: 'ਫੋਨ ਨੰਬਰ',
    emailPlaceholder: 'ਈਮੇਲ ਖਾਤਾ',
    confirmEmailPlaceholder: 'ਈਮੇਲ ਖਾਤੇ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ',
    phonePlaceholderLong: 'e.g. 416-555-0123',
    emailPlaceholderLong: 'e.g. name@example.com',
    confirmEmailPlaceholderLong: 'e.g. name@example.com',

    heardLabel: 'ਤੁਹਾਨੂੰ MTM ਨਿਊਕਮਰ ਸਰਵੇ ਬਾਰੇ ਕਿਵੇਂ ਪਤਾ ਲੱਗਾ?',
    heardDefault: '-- ਚੁਣੋ --',
    heardOptions: [
      'ਰਫ਼ੂਜੀ 613',
      'ਕੋਈ ਹੋਰ ਸੈਟਲਮੈਂਟ ਸੰਸਥਾ',
      'ਭਾਈਚਾਰਕ ਸਮਾਗਮ (ਜਿਵੇਂ ਕਿ ਨਿਊਕਮਰਜ਼ ਡੇ)',
      'ਪਰਿਵਾਰ ਜਾਂ ਦੋਸਤ',
      'ਸੋਸ਼ਲ ਮੀਡੀਆ',
      'ਹੋਰ',
      'ਪਤਾ ਨਹੀਂ'
    ],

    error: 'ਗਲਤੀ - ਤੁਹਾਨੂੰ ਇਨਪੁਟ ਬਾਕਸ ਵਿੱਚ ਆਪਣਾ ਫ਼ੋਨ ਨੰਬਰ ਅਤੇ ਈਮੇਲ ਪਤਾ ਪ੍ਰਦਾਨ ਕਰਨ ਦੀ ਲੋੜ ਹੈ',
    submit: 'ਜਮ੍ਹਾਂ ਕਰੋ',
    success: 'ਜਾਣਕਾਰੀ ਪ੍ਰਦਾਨ ਕਰਨ ਲਈ ਤੁਹਾਡਾ ਧੰਨਵਾਦ! ਤੁਹਾਨੂੰ ਹੁਣ ਐਮਟੀਐਮ ਨਵੇਂ ਆਏ ਸਰਵੇਖਣ ਵਿੱਚ ਹਿੱਸਾ ਲੈਣ ਲਈ ਦਰਜ ਕਰ ਲਿਆ ਹੈ । ਤੁਹਾਡੇ ਨਾਲ ਜਲਦੀ ਸੰਪਰਕ ਕੀਤਾ ਜਾਵੇਗਾ',

    faqTitle: 'ਸਵਾਲ',
    faq: [
      ['ਅਕਸਰ ਪੁੱਛੇ ਜਾਣ ਵਾਲੇ ਪ੍ਰਸ਼ਨ',
       'ਐਮਟੀਐਮ ਨਿਉਕਮਰਸ ਇਕੋ ਮੀਡੀਆ ਅਤੇ ਟੈਕਨੋਲੋਜੀ ਦਾ ਸਰਵੇਖਣ ਹੈ ਜੋ ਕੈਨੇਡਾ ਵਿਚ ਨਵੇਂ ਆਏ ਹਨ। ਇਹ ਉਹਨਾਂ ਲੋਕਾਂ ਤੇ ਕੇਂਦ੍ਰਿਤ ਹੈ ਜੋ ਪਿਛਲੇ 5 ਸਾਲਾਂ ਦੇ ਅੰਦਰ ਕੈਨੇਡਾ ਆਏ ਹਨ ਅਤੇ ਇਹ ਸਮਝਣ ਵਿੱਚ ਸਹਾਇਤਾ ਕਰਦੇ ਹਨ ਕਿ ਨਵੇਂ ਆਉਣ ਵਾਲੇ ਕਿਵੇਂ ਟੀਵੀ ਅਤੇ ਵੀਡਿਓ ਵੇਖਦੇ ਹਨ, ਸੰਗੀਤ ਸੁਣਦੇ ਹਨ, ਦੋਸਤਾਂ ਅਤੇ ਪਰਿਵਾਰ ਨਾਲ ਜੁੜਦੇ ਹਨ ਅਤੇ ਉਨ੍ਹਾਂ ਦੀਆਂ ਖ਼ਬਰਾਂ ਪ੍ਰਾਪਤ ਕਰਦੇ ਹਨ। ਇਹ 12 ਵੱਖ-ਵੱਖ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਆਯੋਜਿਤ ਕੀਤਾ ਜਾਵੇਗਾ: ਅੰਗ੍ਰੇਜ਼ੀ, ਫ੍ਰੈਂਚ, ਟੈਗਾਲੋਗ, ਕੈਂਟੋਨੀਜ਼, ਮੈਂਡਰਿਨ, ਪੰਜਾਬੀ, ਅਰਬੀ, ਸਪੈਨਿਸ਼, ਹਿੰਦੀ, ਸਵਾਹਿਲੀ, ਯੂਕ੍ਰੇਨੀ ਅਤੇ ਅਮਹਾਰਿਕ।'],
      ['ਇਹ ਸਰਵੇਖਣ ਕੌਣ ਕਰ ਰਿਹਾ ਹੈ?',
       'ਐਮਟੀਐਮ ਨਿਉਕਮਰਸ ਮੀਡੀਆ ਟੈਕਨਾਲੋਜੀ ਮਾਨੀਟਰ (ਐਮਟੀਐਮ) ਦਾ ਹਿੱਸਾ ਹੈ। ਐਮਟੀਐਮ ਕੈਨੇਡਾ ਵਿੱਚ ਸਭ ਤੋਂ ਉੱਚ ਗੁਣਵੱਤਾ ਵਾਲਾ ਮੀਡੀਆ ਅਧਿਐਨ ਹੈ। ਪਿਛਲੇ 15 ਸਾਲਾਂ ਦੌਰਾਨ, ਐਮਟੀਐਮ ਨੇ 300,000 ਤੋਂ ਵੱਧ ਕੈਨੇਡੀਅਨਾਂ ਨਾਲ ਗੱਲ ਕੀਤੀ ਹੈ, ਜੋ ਇਸ ਨੂੰ ਆਪਣੀ ਕਿਸਮ ਦਾ ਸਭ ਤੋਂ ਸਟੀਕ ਅਤੇ ਵਿਸਤ੍ਰਿਤ ਮੀਡੀਆ ਟੈਕਨਾਲੌਜੀ ਟਰੈਕਿੰਗ ਸਰਵੇਖਣ ਬਣਾਉਂਦਾ ਹੈ।'],
      ['ਕੀ ਮੇਰੇ ਜਵਾਬ ਨਿਜੀ ਰਹਿਣਗੇ?',
       'ਹਾਂ। ਐਮਟੀਐਮ ਸੀਬੀਸੀ / ਰੇਡੀਓ- ਕੈਨੇਡਾ ਦੀ ਇਕ ਸੰਪਤੀ ਹੈ ਅਤੇ ਤੁਹਾਡੇ ਜਵਾਬ ਨਿਜੀ ਰਹਿਣਗੇ। ਤੁਹਾਡੀ ਨਿਜੀ ਜਾਣਕਾਰੀ ਨੂੰ ਕਿਸੇ ਹੋਰ ਨਾਲ ਸਾਂਝਾ ਨਹੀਂ ਕੀਤਾ ਜਾਵੇਗਾ ਅਤੇ ਇਹ ਸਰਵੇਖਣ ਪੂਰਾ ਕਰਨ ਤੋਂ ਬਾਅਦ ਤੁਹਾਨੂੰ ਕੁਝ ਵੀ ਵੇਚਿਆ ਜਾਂ ਦੁਬਾਰਾ ਸੰਪਰਕ ਨਹੀਂ ਕੀਤਾ ਜਾਵੇਗਾ। ਤੁਹਾਡੀ ਨਿਜੀ ਜਾਣਕਾਰੀ ਨੂੰ ਵੇਚਿਆ ਜਾਂ ਸਾਂਝਾ ਨਹੀਂ ਕੀਤਾ ਜਾਵੇਗਾ ਅਤੇ ਤੁਹਾਡਾ ਨਾਮ ਸਰਵੇਖਣ ਦੇ ਨਤੀਜਿਆਂ ਨਾਲ ਨਹੀਂ ਜੋੜਿਆ ਜਾਵੇਗਾ ਅਤੇ ਨਾ ਹੀ ਭਵਿੱਖ ਦੇ ਕਿਸੇ ਸਰਵੇਖਣ ਨਾਲ ਜੁੜੇਗਾ।'],
      ['ਮੈਂ ਇਸ ਸਰਵੇਖਣ ਨੂੰ ਕਿਵੇਂ ਪੂਰਾ ਕਰਾਂਗਾ?',
       "ਇਹ ਇਕ ਓਨ਼ਲਾਈਨ ਸਰਵੇਖਣ ਹੈ। ਤੁਸੀਂ ਟੈਕਸਟ ਸੰਦੇਸ਼ ਜਾਂ ਈਮੇਲ ਦੁਆਰਾ ਸਰਵੇਖਣ ਨੂੰ ਪੂਰਾ ਕਰਨ ਲਈ ਲਿੰਕ ਪ੍ਰਾਪਤ ਕਰਨ ਦੀ ਚੋਣ ਕਰ ਸਕਦੇ ਹੋ। ਇਕ ਵਾਰ ਜਦੋਂ ਤੁਸੀਂ ਸਾਨੂੰ ਦੱਸ ਦਿੰਦੇ ਹੋ ਕਿ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ, ਤਾਂ 48 ਘੰਟਿਆਂ ਦੇ ਵਿੱਚ ਤੁਹਾਨੂੰ ਇਕ ਸੰਦੇਸ਼ ਮਿਲੇਗਾ ਜਿਸ ਵਿਚ ਤੁਹਾਨੂੰ ਸਰਵੇਖਣ ਪੂਰਾ ਕਰਨ ਲਈ ਕਿਹਾ ਜਾਵੇਗਾ। ਫਿਰ, ਤੁਸੀਂ ਸਿਰਫ ਲਿੰਕ ਤੇ ਕਲਿਕ ਕਰੋ ਅਤੇ ਆਪਣੀ ਚੋਣ ਦੀ ਭਾਸ਼ਾ ਵਿੱਚ ਓਨਲਾਈਨ ਸਰਵੇਖਣ ਦਾ ਜਵਾਬ ਦਿਓ। ਤੁਸੀਂ ਇਸਨੂੰ ਆਪਣੇ ਫੋਨ ਤੇ, ਟੈਬਲੇਟ ਜਾਂ ਕੰਪਿਉਟਰ ਤੇ ਪੂਰਾ ਕਰ ਸਕਦੇ ਹੋ।"],
      ['ਇਸ ਨੂੰ ਕਿੰਨਾ ਸਮਾਂ ਲਗੇਗਾ?',
       'ਇਹ 10 ਤੋਂ 15 ਮਿੰਟ ਲੈਂਦਾ ਹੈ।'],
      ['ਕੀ ਕੋਈ ਪ੍ਰੋਤਸਾਹਨ ਪ੍ਰਦਾਨ ਕੀਤੇ ਜਾਣਗੇ?',
       'ਹਾਂ. ਸਰਵੇਖਣ ਨੂੰ ਪੂਰਾ ਕਰਨ ਤੋਂ ਬਾਅਦ, ਤੁਹਾਨੂੰ Mastercard ਤੋਂ $10 ਦਾ ਇੱਕ ਆਨਲਾਈਨ ਗਿਫਟ ਕਾਰਡ ਮਿਲੇਗਾ, ਜਿਸਨੂੰ ਤੁਸੀਂ ਕਿਤੇ ਵੀ ਵਰਤ ਸਕਦੇ ਹੋ।'],
      ['ਮੈਨੂੰ ਹਿੱਸਾ ਕਿਉਂ ਲੈਣਾ ਚਾਹੀਦਾ ਹੈ?',
       "ਆਮ ਐਮਟੀਐਮ ਸਰਵੇਖਣ ਹਰ ਸਾਲ 15 ਸਾਲਾਂ ਤੋਂ ਕੀਤਾ ਜਾਂਦਾ ਹੈ, ਪਰ ਇਹ ਪਹਿਲੀ ਵਾਰ ਹੈ ਜਦੋਂ ਇਸ ਅਧਿਐਨ ਨੇ ਕੈਨੇਡਾ ਵਿੱਚ ਨਵੇਂ ਆਏ ਲੋਕਾਂ ਅਤੇ ਮੀਡੀਆ ਉੱਤੇ ਧਿਆਨ ਕੇਂਦ੍ਰਤ ਕੀਤਾ ਗਿਆ ਹੈ। ਇਸ ਸਰਵੇਖਣ ਨੂੰ ਪੂਰਾ ਕਰਕੇ, ਤੁਸੀਂ ਨਵੇਂ ਆਏ ਲੋਕਾਂ ਨੂੰ ਇਕ ਆਵਾਜ਼ ਦੇਣ ਵਿਚੱ ਸਹਾਇਤਾ ਕਰਨ ਅਤੇ ਨੀਤੀ ਨਿਰਮਾਤਾਵਾਂ ਅਤੇ ਮੀਡੀਆ ਕੰਪਨੀਆਂ ਦੁਆਰਾ ਉਹਨਾ ਦੇ ਅਮਲਾਂ ਨੂੰ ਬਿਹਤਰ ਤਰੀਕੇ ਨਾਲ ਸਮਝਣ ਵਿਚ ਇਕ ਬਹੁਤ ਮਹੱਤਵਪੂਰਣ ਭੂਮਿਕਾ ਅਦਾ ਕਰ ਰਹੇ ਹੋ।"],
      ['ਡਾਟਾ ਕਿਸ ਲਈ ਵਰਤੇਆ ਜਾਏਗਾ?',
       "ਸਰਕਾਰੀ ਅਤੇ ਪ੍ਰਾਈਵੇਟ ਸੈਕਟਰ ਦੀਆਂ ਸੰਸਥਾਵਾਂ ਐਮਟੀਐਮ ਦੇ ਨਵੇਂ ਆਏ ਸਰਵੇਖਣ ਦੀਆਂ ਖੋਜਾਂ ਦੀ ਵਰਤੋਂ ਕਰਨਗੀਆਂ। ਉਦਾਹਰਣ ਦੇ ਲਈ, ਇਸ ਸਰਵੇਖਣ ਦੇ ਨਤੀਜੇ ਕੈਨੇਡਾ ਦੀ ਸਰਕਾਰ ਇੱਕ ਸਮੂਹ ਦੇ ਰੂਪ ਵਿੱਚ ਨਵੇਂ ਆਏ ਲੇਕਾਂ ਦੀ ਵਧੇਰੇ ਸਹੀ ਤਸਵੀਰ ਅਤੇ ਉਹਨਾਂ ਦੀ ਟੈਕਨੋਲੋਜੀ ਦੀ ਵਰਤੋਂ ਵਿੱਚ ਸਹਾਇਤਾ ਕਰਨਗੇ, ਜਿਵੇਂ ਕਿ ਇੰਟਰਨੈਟ ਦੀ ਪਹੁੰਚ, ਸੈੱਲ ਫੋਨਾਂ ਦੀ ਮਾਲਕੀਅਤ, ਕੇਬਲ ਦੀ ਗਾਹਕੀ, ਸੋਸ਼ਲ ਮੀਡੀਆ ਅਤੇ ਟੀਵੀ ਖਪਤ। ਇਹ ਬਿਹਤਰ ਨੀਤੀਆਂ ਦੀ ਜਾਣਕਾਰੀ ਦੇਵੇਗਾ ਅਤੇ ਬਿਹਤਰ ਬਣਾਏਗਾ ਕਿ ਉਹ ਜਨਤਕ ਸਿਹਤ, ਇਮੀਗ੍ਰੇਸ਼ਨ ਅਤੇ ਬੰਦੋਬਸਤ ਵਰਗੇ ਵਿਸ਼ਿਆਂ 'ਤੇ ਤੁਹਾਨੂੰ ਅਤੇ ਹੋਰ ਨਵੇਂ ਆਏ ਲੋਕਾਂ ਨੂੰ ਜਾਣਕਾਰੀ ਕਿਵੇਂ ਸੰਚਾਰਿਤ ਕਰਦੇ ਹਨ। ਇਹ ਸਮਾਜਿਕ ਸੇਵਾਵਾਂ ਅਤੇ ਮੀਡੀਆ ਕੰਪਨੀਆਂ ਨੂੰ ਸਮਗਰੀ ਬਣਾਉਣ ਅਤੇ ਖਬਰਾਂ ਅਤੇ ਜਾਣਕਾਰੀ ਨੂੰ ਸਾਂਝਾ ਕਰਨ ਵਿੱਚ ਵੀ ਸਹਾਇਤਾ ਕਰੇਗੀ ਜੋ ਨਵੇਂ ਆਏ ਲੋਕਾਂ ਲਈ ਉਪਯੋਗੀ ਅਤੇ ਸੁਵਿਧਾਜਨਕ ਹੈ।"]
    ]
  },

  /* ═══════════════════════════════════════════════════════════════════════════
     ARABIC
     ═══════════════════════════════════════════════════════════════════════════ */
  ar: {
    langValue: 'arabic',
    title: 'استطلاع الإم تي إم عن القادمين الجدد',
    intro: 'إذا كنت قد قدمت إلى كندا في السنوات الخمس الماضية ، فيرجى المشاركة في استطلاع إم تي إم عن القادمين الجدد عن طريق ملء الخانات بوسيلة التواصل المفضلة معك. عند نهاية الاستطلاع، سيتم إعادة توجيهك إلى منصة ليو (LEO) حيث سيطلب منك تقديم معلومات التواصل الخاصة بك.',
    highlight: 'للحصول على بطاقة مسبقة الدفع بقيمة 10 دولارات، يتوجب عليك تقديم رقم هاتف وعنوان صحيحين في كندا.',

    phoneLabel: 'رقم الهاتف',
    emailLabel: 'البريد الإلكتروني',
    confirmEmailLabel: 'تأكيد البريد الإلكتروني',
    phonePlaceholder: 'رقم الهاتف',
    emailPlaceholder: 'البريد الإلكتروني',
    confirmEmailPlaceholder: 'تأكيد البريد الإلكتروني',
    phonePlaceholderLong: 'e.g. 416-555-0123',
    emailPlaceholderLong: 'e.g. name@example.com',
    confirmEmailPlaceholderLong: 'e.g. name@example.com',

    heardLabel: 'كيف علمت باستطلاع MTM الخاص بالوافدين الجدد؟',
    heardDefault: '-- اختر --',
    heardOptions: [
      'منظمة اللاجئين 613',
      'منظمة استقرار أخرى',
      'فعالية مجتمعية (مثل يوم الوافدين الجدد)',
      'العائلة أو الأصدقاء',
      'وسائل التواصل الاجتماعي',
      'خيار آخر',
      'لا أعرف'
    ],

    error: 'خطأ - يجب عليك تقديم رقم هاتفك والبريد الإلكتروني في المربعات',
    submit: 'التقديم',
    success: 'شكرا لتزويدنا بمعلوماتك! لقد قمت بالتسجيل الآن للمشاركة في الإستطلاع. سيتم الاتصال بك قريب',

    faqTitle: 'الاسئلة الشائعة',
    faq: [
      ['ماهو هذا الإستطلاع؟',
       'إستطلاع إم تي إن تي عن الوافدين الجدد (MTM Newcomers) هو الإستطلاع الوحيد المتعلق بوسائل الإعلام والتكنولوجيا عن الوافدين الجدد في كندا. يركز على الأشخاص الذين قدموا إلى كندا خلال السنوات الخمس الماضية ويساعد على فهم مشاهدتهم للتلفزيون والفيديو والاستماع إلى الموسيقى والتواصل مع الأصدقاء والعائلة والحصول على أخبارهم. سيتم إجراء هذا الاستطلاع من خلال 12 لغة مختلفة: الإنجليزية والفرنسية والتغالوغية والكانتونية والمندرين والبنجابية والعربية والإسبانية والهندية والسواحلية والأوكرانية والأمهرية.'],
      ['من يقوم بإجراء هذا إستطلاع؟',
       'يعتبر إستطلاع إم تي إم عن الوافدين الجدد جزء من "الميديا تكنولوجي مونتر" مايعرف أيضا باسم (الإم تي إم) وهي الدراسة الإعلامية الأعلى جودة في كندا. على مدار الخمسة عشر عاماً الماضي قامت الإم تي إم بالتحدث مع أكثر من 300 ألف كندي مما يجعلها الإستبيان الإعلامي والتكنولوجي الأشمل و الأكثر دقة من نوعه'],
      ['هل ستبقى إجاباتي سرية؟',
       'نعم. الإم تي إم تعتبر ملكية ل سي بي سي (الهيئة العامة للإذاعة والتلفزيون في كندا) و ستبقى إجاباتك سرية. لن تتم مشاركة معلوماتك الشخصية مع أي شخص آخر ولن يتم بيع أي بيانات متعلقة بك كما لن يتم التواصل معك مرة أخرى بعد الانتهاء من هذا الاستبيان. لن يتم بيع معلوماتك الشخصية أو مشاركتها ولن يتم ربط اسمك بنتائج الاستطلاع أو بأي استطلاعات مستقبلية.'],
      ['كيف يمكنني استكمال هذا الإستطلاع؟',
       'هذا استطلاع سيتم إكماله عبر الإنترنت. يمكنك اختيار تلقي الرابط لإكمال الاستبيان عبر رسالة نصية أو بريدك إلكتروني. بمجرد إخبارنا بالطريقة التي ترغب فيها أن يتم الاتصال بك ، ستتلقى في غضون 48 ساعة رسالة تطلب منك إكمال الاستبيان. بعد ذلك ، ما عليك سوى النقر فوق الرابط والإجابة على الاستبيان عبر الإنترنت باللغة التي تختارها. يمكنك إكماله على هاتفك أو جهاز لوحي (تابلت) أو كمبيوتر.'],
      ['كم من الوقت سوف يستغرق استكمال هذا الاستطلاع اونلاين؟',
       'يستغرق حوالي 10 إلى 15 دقيقة.'],
      ['هل سيتم تقديم أي حوافز؟',
       'نعم. بعد الانتهاء من الاستبيان ، ستتلقى بطاقة اونلاين من  ماستر كارد$ بقيمة 10  و التي يمكنك استخدامها في أي مكان.'],
      ['لماذا عليّ المشاركة؟',
       'تم إجراء إستطلاع الإم تي إم العام لمدة خمسة عشر عاماً إلا أنها المرة الأولى التي تركز فيها دراسة بهذا الحجم على الوافدين الجدد ووسائل الإعلام في كندا. من خلال إكمال هذا الاستبيان ، فإنك تلعب دوراً مهماً للغاية في المساعدة على منح القادمين الجدد صوتاً وجعل ممارساتهم مفهومة بشكل أفضل من قبل صانعي السياسات والشركات الإعلامية.'],
      ['كيف سيتم استخدام نتائج هذا الاستبيان؟',
       'ستقوم الحكومة الكندية ومؤسسات القطاع الخاص نتائج إستطلاع إم تي إن تي عن الوافدين الجدد (MTM Newcomers). على سبيل المثال، نتائج هذا الاستطلاع ستساعد الحكومة الكندية بالحصول على صورة أكثر دقة للقادمين الجدد واستخدامهم للتكنولوجيا ، مثل الاتصال بالإنترنت ، وملكية الهواتف المحمولة ، والاشتراك في تلفزيون الكابل ، ووسائل التواصل الاجتماعي ، واستهلاك التلفزيون. سيؤدي ذلك إلى الوصول إلى سياسات أفضل وتحسين كيفية توصيل المعلومات إليك و للقادمين الجدد الآخرين حول مواضيع مثل الصحة العامة والهجرة. ستساعد النتائج الخدمات الاجتماعية وشركات الإعلام على تطوير استراتيجيات أفضل لإنشاء المحتوى ومشاركة الأخبار والمعلومات ذات الصلة و التي تهم للقادمين الجدد.']
    ]
  },

  /* ═══════════════════════════════════════════════════════════════════════════
     TAGALOG
     ═══════════════════════════════════════════════════════════════════════════ */
  ta: {
    langValue: 'tagalog',
    title: 'MTM Survey ng Mga Baguhan',
    intro: 'Kung dumating ka sa Canada sa nakaraang 5 taon, mangyaring makilahok sa MTM survey ng Mga Baguhan sa pamamagitan ng pagpuno ng iyong gustong pamamaraan ng pakikipag-ugnay sa ibaba. Sa pagtatapos ng survey, dadalhin ka sa LEO platform kung saan hihingiin ang ilan sa iyong impormasyon sa pakikipag-ugnayan.',
    highlight: 'Para maging kwalipikadong makatanggap ng $10 na prepaid card, dapat kang magbigay ng valid na numero ng telepono at address sa Canada.',

    phoneLabel: 'Numero ng Telepono',
    emailLabel: 'Email Address',
    confirmEmailLabel: 'Kumpirmahin ang Email Address',
    phonePlaceholder: 'Numero ng Telepono',
    emailPlaceholder: 'Email Address',
    confirmEmailPlaceholder: 'Kumpirmahin ang Email Address',
    phonePlaceholderLong: 'e.g. 416-555-0123',
    emailPlaceholderLong: 'e.g. name@example.com',
    confirmEmailPlaceholderLong: 'e.g. name@example.com',

    heardLabel: 'Paano mo nalaman ang tungkol sa MTM Newcomers survey?',
    heardDefault: '-- Pumili --',
    heardOptions: [
      'Refugee 613',
      'Iba pang organisasyon sa paninirahan',
      'Kaganapan sa Komunidad (hal. Araw ng mga Bagong dating)',
      'Pamilya o Mga Kaibigan',
      'Social Media',
      'Iba pa',
      'Hindi alam'
    ],

    error: 'MALI - Kailangan mong ibigay ang iyong numero ng telepono at email address sa mga patlang',
    submit: 'Isumite',
    success: 'Salamat sa pagbibigay ng iyong impormasyon! Nakarehistro ka na ngayon upang makilahok sa MTM survey ng Mga Baguhan. Kokontakin ka sa lalong madaling panahon.',

    faqTitle: 'Madalas Itanong',
    faq: [
      ['Ano ang survey na ito?',
       "Ang MTM Newcomers ay ang tanging survey sa media at teknolohiya sa mga baguhan sa Canada. Nakatuon ito sa mga taong dumating sa Canada sa loob ng huling 5 taon at tumutulong na maunawaan kung paano manood ng TV at video, makinig ng musika, kumonekta sa mga kaibigan at pamilya, at makuha ang kanilang balita ang mga bagong dating. Isasagawa ito sa 12 iba't ibang wika: Ingles, French, Tagalog, Cantonese, Mandarin, Punjabi, Arabic, Spanish, Hindi, Swahili, Ukrainian at Amharic."],
      ['Sino ang gumagawa ng survey na ito?',
       'Bahagi ng Media Technology Monitor (MTM) ang MTM Newcomers. Pinakamataas na kalidad ng pag-aaral ng media sa Canada ang MTM. Sa nakaraang 15 taon, sinasalita ang MTM ng mahigit 300,000 mga taga-Canada, na ginagawa itong pinakatumpak at komprehensibong survey ng pagsubaybay sa teknolohiya ng media ng uri nito.'],
      ['Manatili bang pribado ang aking mga tugon?',
       'Oo. Pag-aari ng CBC/Radio-Canada ang MTM at mananatiling pribado ang iyong mga sagot. Hindi maibabahagi sa sinumang iba pa ang iyong personal na impormasyon at hindi ka bebentahan ng anumang bagay o muling kokontakin pagkatapos mong kumpletuhin ang survey na ito. Hindi ibebenta o maibabahagi ang iyong personal na impormasyon at hindi maikokonekta ang iyong pangalan sa mga resulta ng survey o sa anumang mga survey sa hinaharap.'],
      ['Paano ko kukumpletuhin ang survey na ito?',
       'Isa itong online na survey. Maaari mong piliing makatanggap ng link upang kumpletuhin ang survey sa pamamagitan ng text message o email. Sa sandaling ipaalam mo sa amin kung paano ang gusto mong pakikipag-ugnay sa iyo, sa loob ng 48 oras makakatanggap ka ng mensahe na humihiling sa iyo na kumpletuhin ang survey. Pagkatapos, mag-click ka lamang sa link at sagutin ang online na survey sa wikang pipiliin mo. Maaari mo itong kumpletuhin sa iyong telepono, sa isang tablet o computer.'],
      ['Gaano ito katagal gawin?',
       'Magtatagal ito ng 10 hanggang 15 minuto.'],
      ['May mga insentibo bang ibibigay?',
       'Oo. Matapos makumpleto ang survey, makakatanggap ka ng online na gift card na nagkakahalaga ng $10 mula sa Mastercard, na maaari mong gamitin kahit saan.'],
      ['Bakit ako dapat lumahok?',
       'Isinasagawa bawat taon ang pangkalahatang Survey ng MTM sa loob ng 15 taon, ngunit ito ang kauna-unahang pagkakataon na nakatuon ang ganito kalaking pag-aaral sa mga baguhan at media sa Canada. Sa pamamagitan ng pagkumpleto ng survey na ito, ginagampanan mo ang napakahalagang papel sa pagtulong na bigyan ng tinig ang mga baguhan at gawing mas nauunawaan ng mga gumagawa ng patakaran at mga kumpanya ng media ang kanilang mga kasanayan.'],
      ['Para saan gagamitin ang data?',
       'Gagamitin ng mga samahan ng gobyerno at pribadong sektor ang mga matutuklasan mula sa survey ng MTM Newcomer. Halimbawa, ang mga matutuklasan mula sa survey na ito ay makakatulong sa gobyerno ng Canada na magkaroon ng mas tumpak na larawan ng mga bagong dating bilang pangkat at ang kanilang paggamit ng teknolohiya, tulad ng pag-access sa internet, pagmamay-ari ng mga cell phone, suskrisyon sa cable, social media at pagkonsumo sa TV. Ipaalam nito ang mas mahusay na mga patakaran at pagbutihin kung paano nila ipararating ang impormasyon sa iyo at sa iba pang mga bagong dating sa mga paksang tulad ng kalusugan sa publiko, imigrasyon, at paninirahan. Tutulungan din nito ang mga serbisyong panlipunan at mga kumpanya ng media na bumuo ng mas mahusay na mga diskarte para sa paglikha ng nilalaman at pagbabahagi ng balita at impormasyon na nauugnay at maginhawa para sa mga bagong dating.']
    ]
  },

  /* ═══════════════════════════════════════════════════════════════════════════
     MANDARIN
     ═══════════════════════════════════════════════════════════════════════════ */
  ma: {
    langValue: 'Mandarin',
    title: 'MTM新移民调查问卷',
    intro: '如果您在过去五年之内登陆加拿大，请在下面填写您的联系方式来参与MTM新移民调查问卷。调查结束后，您将被重定向到LEO平台，系统会要求您提供一些联系信息。',
    highlight: '如要符合获取$10预付卡的资格，您必须提供加拿大境内的有效电话号码和地址。',

    phoneLabel: '电话号码',
    emailLabel: '电子邮件地址',
    confirmEmailLabel: '确认电子邮件地址',
    phonePlaceholder: '电话号码',
    emailPlaceholder: '电子邮件地址',
    confirmEmailPlaceholder: '确认电子邮件地址',
    phonePlaceholderLong: 'e.g. 416-555-0123',
    emailPlaceholderLong: 'e.g. name@example.com',
    confirmEmailPlaceholderLong: 'e.g. name@example.com',

    heardLabel: '您是如何得知 MTM 新移民调查的？',
    heardDefault: '-- 选择 --',
    heardOptions: [
      '难民 613',
      '其他安置机构',
      '社区活动（例如新移民日）',
      '家人或朋友',
      '社交媒体',
      '其他',
      '不知道'
    ],

    error: '错误-您需要在输入框中提供您的电话号码和电子邮件地址',
    submit: '提交',
    success: '感谢您提供的信息！您现在已经完成了MTM 新移民调查问卷活动的注册。我们将尽快与您联系',

    faqTitle: '常见问题',
    faq: [
      ['这个调查问卷是关于哪方面的？',
       '"MTM新移民"是加拿大唯一针对新移民的有关媒体和技术方面的调查问卷。它针对的是来加拿大五年以内的新移民，通过问卷来了解这些新移民是如何观看电视和视频、收听音乐、与朋友和家人联系以及获取新闻。本次调查支持十二种语言版本：英语、法语、他加禄语、粤语、普通话、旁遮普语、阿拉伯语、西班牙语、印地语、斯瓦希里语、乌克兰语和阿姆哈拉语。'],
      ['谁主导这个调查问卷？',
       '"MTM新移民"是媒体技术监测（MTM）的一个组成部分。MTM拥有加拿大最高质量的媒体研究。在过去的15年中，MTM与超过30万加拿大人进行了对话，使其成为同类中最准确、最全面的跟踪媒体技术的调查问卷。'],
      ['我的回答是保密的吗？',
       '是的。MTM隶属于加拿大广播电台，您的所有回答将保密。在完成调查问卷后，您的个人信息将不会被售卖或分享给除您以外的其它任何人，完成调查问卷后您将不会被联系，您的姓名也不会与本次问卷或未来的任何调查问卷相关联。'],
      ['我将如何完成这份调查问卷？',
       '这是一个在线调查问卷。您可以通过由短信或电子邮件发送的链接来完成这个问卷。在您告诉我们您选择的接收方式后，您将在48小时内收到一条消息来要求您完成这个调查问卷。然后，您只需点击接收到的链接并选择一种语言来回答这份问卷。您可以在手机、平板电脑或计算机上完成此次调查问卷。'],
      ['这个调查问卷需要多长时间？',
       '需要10到15分钟完成'],
      ['是否提供报酬？',
       '的。完成调查后，您将收到价值$10的万事达在线礼品卡。该礼品卡可在任意地方使用。'],
      ['我为什么要参与这项调查问卷？',
       'MTM的常规调查问卷每年都进行并且已经做了15年，但这次是第一次大规模的针对加拿大的新移民和媒体的调查问卷。通过完成此次调查问卷，您将在帮助新移民发声并使决策者和媒体公司更好地理解新移民言行方面发挥非常重要的作用。'],
      ['这些数据将用在什么地方？',
       '"MTM 新移民"调查问卷的结果将提供给政府和私营部门组织使用。例如，这项调查的结果将帮助加拿大政府更准确地了解新移民群体及其技术使用情况，例如互联网访问、手机所有权、有线电视订阅、社交媒体和电视消费。这些信息将有助于政府制定政策，并改善与您和其他新移民就诸如公共卫生、移民和定居等话题的沟通和交流。它还将帮助社会服务和媒体公司更好地创建和分享与新移民相关的新闻和信息。']
    ]
  },

  /* ═══════════════════════════════════════════════════════════════════════════
     CANTONESE
     ═══════════════════════════════════════════════════════════════════════════ */
  ca: {
    langValue: 'cantonese',
    title: 'MTM新移民調查問卷',
    intro: '如果您在過去五年之內登陸加拿大，請在下面填寫您的聯繫方式來參與MTM新移民調查問卷。當完成問卷調查後，您將會連接至LEO平台，該系統會要求您提供聯絡資料。',
    highlight: '您必須提供有效的加拿大電話號碼及地址，以符合獲取$10預付卡的資格。',

    phoneLabel: '電話號碼',
    emailLabel: '電子郵件地址',
    confirmEmailLabel: '確認電子郵件地址',
    phonePlaceholder: '電話號碼',
    emailPlaceholder: '電子郵件地址',
    confirmEmailPlaceholder: '確認電子郵件地址',
    phonePlaceholderLong: 'e.g. 416-555-0123',
    emailPlaceholderLong: 'e.g. name@example.com',
    confirmEmailPlaceholderLong: 'e.g. name@example.com',

    heardLabel: '你係點樣聽到MTM新來者調查嘅?',
    heardDefault: '-- 選擇 --',
    heardOptions: [
      '難民 613',
      '其他安置機構',
      '社區活動(例如新來者日)',
      '家人或朋友',
      '社交媒體',
      '其他',
      '唔知'
    ],

    error: '錯誤-您需要在輸入框中提供您的電話號碼和電子郵件地址',
    submit: '提交',
    success: '感謝您提供的資訊！您現在已經完成了MTM 新移民調查問卷活動的註冊。我們將儘快與您聯繫',

    faqTitle: '常見問題',
    faq: [
      ['這個調查問卷是關於哪方面的？',
       '『MTM新移民』是加拿大唯一針對新移民的有關媒體和技術方面的調查問卷。它針對的是來加拿大五年以內的新移民，通過問卷來瞭解這些新移民是如何觀看電視和視頻、收聽音樂、與朋友和家人聯繫以及獲取新聞。本問卷調查將以十二種語言進行：英語、法語、他加祿語、粵語、普通話、旁遮普語、阿拉伯語、西班牙語、印地語、斯瓦希里語、烏克蘭語以及阿姆哈拉語。'],
      ['誰主導這個調查問卷？',
       '『MTM新移民』是媒體技術監測（MTM）的一個組成部分。MTM擁有加拿大最高品質的媒體研究。在過去的15年中，MTM與超過30萬加拿大人進行了對話，使其成為同類中最準確、最全面的跟蹤媒體技術的調查問卷。'],
      ['我的回答是保密的嗎？',
       '是的。MTM隸屬於加拿大廣播電臺，您的所有回答將保密。在完成調查問卷後，您的個人資訊將不會被售賣或分享給除您以外的其它任何人，完成調查問卷後您將不會被聯繫，您的姓名也不會與本次問卷或未來的任何調查問卷相關聯。'],
      ['我將如何完成這份調查問卷？',
       '這是一個線上調查問卷。您可以通過由短信或電子郵件發送的連結來完成這個問卷。在您告訴我們您選擇的接收方式後，您將在48小時內收到一條消息來要求您完成這個調查問卷。然後，您只需點擊接收到的連結並選擇一種語言來回答這份問卷。您可以在手機、平板電腦或電腦上完成此次調查問卷。'],
      ['這個調查問卷需要多長時間？',
       '需要10到15分鐘完成'],
      ['是否提供報酬？',
       '是的。完成問卷調查後，您將會獲得價值$10的萬事達網上禮品卡。該禮品卡可於任何地方使用。'],
      ['我為什麼要參與這項調查問卷？',
       'MTM的常規調查問卷每年都進行並且已經做了15年，但這次是第一次大規模的針對加拿大的新移民和媒體的調查問卷。通過完成此次調查問卷，您將在幫助新移民發聲並使決策者和媒體公司更好地理解新移民言行方面發揮非常重要的作用。'],
      ['這些資料將用在什麼地方？',
       '『MTM新移民』調查問卷的結果將提供給政府和私營部門組織使用。例如，這項調查的結果將幫助加拿大政府更準確地瞭解新移民群體及其技術使用情況，例如互聯網訪問、手機所有權、有線電視訂閱、社交媒體和電視消費。這些資訊將有助於政府制定政策，並改善與您和其他新移民就諸如公共衛生、移民和定居等話題的溝通和交流。它還將幫助社會服務和媒體公司更好地創建和分享與新移民相關的新聞和資訊。']
    ]
  },

  /* ═══════════════════════════════════════════════════════════════════════════
     SWAHILI
     ═══════════════════════════════════════════════════════════════════════════ */
  sw: {
    langValue: 'swahili',
    title: 'Utafiti wa wageni kutoka MTM',
    intro: 'Ikiwa umekaa nchini Kanada kwa kipindi cha miaka 5 iliyopita, tafadhali shiriki katika utafiti wa wageni kutoka MTM kwa kuweka njia unayopendelea ya mawasiliano hapa chini. Mwishoni mwa utafiti, utaelekezwa kwenye jukwaa la LEO ambapo utaombwa baadhi ya maelezo yako ya mawasiliano.',
    highlight: 'Ili ustahiki kupokea kadi ya kulipia kabla ya dola 10, ni lazima upeane nambari ya simu na anwani zilizo halali nchini Kanada.',

    phoneLabel: 'Nambari ya simu',
    emailLabel: 'Barua pepe',
    confirmEmailLabel: 'Thibitisha barua pepe',
    phonePlaceholder: 'Nambari ya simu',
    emailPlaceholder: 'Barua pepe',
    confirmEmailPlaceholder: 'Thibitisha barua pepe',
    phonePlaceholderLong: 'e.g. 416-555-0123',
    emailPlaceholderLong: 'e.g. name@example.com',
    confirmEmailPlaceholderLong: 'e.g. name@example.com',

    heardLabel: 'Ulisikia vipi kuhusu utafiti wa Wapya Mjini wa MTM?',
    heardDefault: '-- Chagua --',
    heardOptions: [
      'Mhama 613',
      'Shirika lingine la makazi',
      'Tukio la Kijamii (k.m. Siku ya Wapya Mjini)',
      'Familia au Marafiki',
      'Mitandao ya Kijamii',
      'Mengineyo',
      'Sijui'
    ],

    error: 'ERROR – You need to provide your phone number and email address in the fields.',
    submit: 'Wasilisha',
    success: 'Thank you for providing your information! You now have registered to take part in the MTM Newcomers survey. You will be contacted soon.',

    faqTitle: 'Maswali Yanayoulizwa Mara Nyingi',
    faq: [
      ['Utafiti huu ni wa nini?',
       'Wageni kutoka MTM ndio utafiti pekee wa vyombo vya habari na teknolojia kuhusu wageni nchini Kanada. Huangazia watu ambao wamekuja nchini Kanada ndani ya miaka 5 iliyopita na husaidia kuelewa jinsi wageni wanavyotazama televisheni na video, kusikiliza muziki, kuwasiliana na marafiki na familia, na kupata habari zao. Utafanywa katika lugha 12 tofauti: Kiingereza, Kifaransa, Kitagalogi, Kikantoni, Kimandarini, Kipunjabi, Kiarabu, Kihispania, Kihindi, Kiswahili, Kiukreni na Kiamhari.'],
      ['Ni nani anayefanya utafiti huu?',
       'Wageni kutoka MTM ni sehemu ya Media Technology Monitor (MTM). MTM ndio utafiti wa ubora wa juu zaidi wa vyombo vya habari nchini Kanada. Katika kipindi cha miaka 15 iliyopita, utafiti wa MTM umefanywa na zaidi ya watu 300,000 nchini Kanada, hatua ambayo inaufanya kuwa utafiti sahihi zaidi na wa kina wa aina yake wa vyombo vya habari.'],
      ['Je, majibu yangu yatabaki kuwa ya siri?',
       'Ndiyo. MTM ni mali ya CBC/Radio-Canada na majibu yako yatabaki kuwa ya siri. Maelezo yako ya binafsi hayatashirikiwa na mtu mwingine yeyote na hutauziwa bidhaa yoyote au kupigiwa simu tena baada ya kumaliza utafiti huu. Maelezo yako ya binafsi hayatauzwa wala kushirikiwa na jina lako halitahusishwa na matokeo ya utafiti wala tafiti zozote za baadaye.'],
      ['Ninawezaje kujaza utafiti huu?',
       'Huu ni utafiti wa mtandaoni. Unaweza kuchagua kupokea kiungo ili kujaza utafiti kupitia SMS au barua pepe. Mara tu unapotufahamisha jinsi ambavyo ungependa tuwasiliane nawe, ndani ya saa 48 utapokea ujumbe unaokuomba ujaze utafiti. Kisha, utabofya tu kiungo na ujibu utafiti wa mtandaoni katika lugha utakayochagua. Unaweza kuujaza kwa kutumia simu yako, kwenye kompyuta kibao au kompyuta.'],
      ['Utachukua muda gani?',
       'Inachukua dakika 10 hadi 15.'],
      ['Je, mtu atapewa kitu chochote cha motisha?',
       'Ndiyo. Baada ya kumaliza kujaza utafiti, utapokea kadi ya zawadi ya mtandaoni yenye thamani ya Dola 10 kutoka Mastercard, ambayo unaweza kutumia popote.'],
      ['Kwa nini nishiriki?',
       'Utafiti wa jumla wa MTM umekuwa ukifanywa kila mwaka kwa miaka 15, lakini hii ni mara ya kwanza kwa utafiti huu mkubwa kuwahi kulenga wageni na vyombo vya habari nchini Kanada. Kwa kujaza utafiti huu, unatimiza jukumu muhimu sana katika kusaidia kuwapa wageni sauti na kufanya mazoea yao kueleweka vyema na watunga sera na kampuni za vyombo vya habari.'],
      ['Maelezo hayo yatatumiwaje?',
       'Serikali pamoja na mashirika ya sekta ya kibinafsi yatatumia matokeo ya utafiti wa MTM Newcomer. Kwa mfano, matokeo ya utafiti huu yatasaidia serikali ya Kanada kuwa na picha sahihi zaidi ya wageni kama kikundi na matumizi yao ya teknolojia, kama vile upatikanaji wa intaneti, umiliki wa simu za mkononi, usajili wa huduma za kebo, mitandao ya kijamii na utumiaji wa televisheni. Hii itasaidia kubiniwa kwa na sera bora na kuboresha jinsi zinavyowasilisha habari kwako na kwa wageni wengine kuhusu mada kama vile afya ya umma, uhamiaji na makazi. Itasaidia pia huduma za kijamii na kampuni za vyombo vya habari kubuni mikakati bora ya kuunda maudhui na kushiriki habari na taarifa zinazohitajika na zinazofaa kwa wageni.']
    ]
  },

  /* ═══════════════════════════════════════════════════════════════════════════
     AMHARIC
     ═══════════════════════════════════════════════════════════════════════════ */
  am: {
    langValue: 'amharic',
    title: 'የMTM አዲስ ገቢ ዳሰሳ ጥናት',
    intro: 'ባለፉት 5 ዓመታት ካናዳ ከደረሳችሁ፣ እባክዎ ከዚህ በታች የመረጡትን የመገናኛ ዘዴ በመሙላት በMTM አዲስ ገቢ ዳሰሳ ጥናት ውስጥ ይሳተፉ።በዳሰሳ ጥናቱ ማብቂያ፣ አንዳንድ የእውቂያ መረጃዎ ወደሚጠየቅበት ወደ LEO መድረክ የሚመሩ ይሆናል።',
    highlight: 'የ$10 ቅድመ-ክፍያ ካርድ ለመቀበል ብቁ ለመሆን፣ በካናዳ የሚሰራ ስልክ ቁጥር ና አድራሻ ማቅረብ ይኖርብዎታል።',

    phoneLabel: 'ስልክ ቁጥር',
    emailLabel: 'የኢሜይል አድራሻ',
    confirmEmailLabel: 'የኢሜይል አድራሻዎን ያረጋግጡ',
    phonePlaceholder: 'ስልክ ቁጥር',
    emailPlaceholder: 'የኢሜይል አድራሻ',
    confirmEmailPlaceholder: 'የኢሜይል አድራሻዎን ያረጋግጡ',
    phonePlaceholderLong: 'e.g. 416-555-0123',
    emailPlaceholderLong: 'e.g. name@example.com',
    confirmEmailPlaceholderLong: 'e.g. name@example.com',

    heardLabel: 'ስለ MTM አዲስ መጤዎች ጥናት እንዴት ሰሙ?',
    heardDefault: '-- ይምረጡ --',
    heardOptions: [
      'የስደተኞች 613',
      'ሌላ የሰፈራ ድርጅት',
      'የማህበረሰብ ዝግጅት (ለምሳሌ የአዲስ መጤዎች ቀን)',
      'ቤተሰብ ወይም ጓደኞች',
      'ማህበራዊ ሚዲያ',
      'ሌላ',
      'አላውቅም'
    ],

    error: 'ስህተት - በመስኮቹ ውስጥ የስልክ ቁጥርዎን እና የኢሜል አድራሻዎን ማቅረብ አለብዎት።',
    submit: 'አስረክብ',
    success: 'Thank you for providing your information! You now have registered to take part in the MTM Newcomers survey. You will be contacted soon.',

    faqTitle: 'በተደጋጋሚ የተጠየቁ ጥያቄዎች',
    faq: [
      ['ይህ የዳሰሳ ጥናት ምንድነው?',
       'MTM Newcomers (MTM አዲስ ገቢዎች) በካናዳ ውስጥ አዳዲስ ሰዎች ወይም ገቢዎች ብቸኛው የሚዲያ እና ቴክኖሎጂ ዳሰሳ ጥናት ነው። ባለፉት 5 ዓመታት ውስጥ ወደ ካናዳ በመጡ ሰዎች ላይ ያተኩራል እና አዲስ የመጡ ሰዎች ወይም ገቢዎች፡ ቴሌቪዥን እና ቪዲዮ እንዴት እንደሚመለከቱ፣ ሙዚቃ እንደሚያዳምጡ፣ ከጓደኞች እና ከቤተሰብ ጋር እንደሚገናኙ እና ዜናቸውን እንደሚያገኙ ለመገንዘብ ይረዳል። በ12 የተለያዩ ቋንቋዎች ይከናወናል፦ እንግሊዝኛ፣ ፈረንሳይኛ፣ ታጋሎግ፣ ካንቶኒዝ፣ ማንዳሪን፣ ፑንጃቢ፣ አረብኛ፣ ስፓኒሽ፣ ሂንዲ፣ ስዋሂሊ፣ ዩክሬንኛ እና አማርኛ።'],
      ['ይህን የዳሰሳ ጥናት እያደረገ ያለው ማነው?',
       'MTM Newcomers (MTM አዲስ ገቢዎች) የሚዲያ ቴክኖሎጂ ተቆጣጣሪ (MTM) አካል ነው። MTM በካናዳ ውስጥ የከፍተኛ ጥራት ሚዲያ ጥናት ነው። ባለፉት 15 ዓመታት MTM ከ300,000 በላይ የሚሆኑ ካናዳውያን ጋር ተነጋግሯል፣ ይህም በአይነቱ እጅግ በጣም ትክክለኛና ሁሉን አቀፍ የሚዲያ ቴክኖሎጂ መከታተያ ዳሰሳ ጥናት አድርጎታል።'],
      ['የሰጠሁት ምላሽ ሚስጥራዊ ሆነው ይቆያሉ?',
       'አዎ። MTM የCBC/Radio-Canada ንብረት ነው፡ እናም መልሶችዎ ሚስጥራዊ ሆነው ይቆያሉ። ይህን የዳሰሳ ጥናት ካጠናቀቁ በኋላ የግል መረጃዎ ለሌላው ሰው አይካፈልም፡ እና ለምንም ነገር አይሸጥም ወይም ማንም እንደገና አያነጋግርዎትም። የግል መረጃዎ አይሸጥም ወይም አይጋራም እና ስምዎ ከዳሰሳ ጥናቱ ውጤቶችም ሆነ ወደፊት ከሚደረጉ ጥናቶች ጋር አይገናኝም።'],
      ['ይህን ዳሰሳ ጥናት እንዴት አጠናቅቀዋለሁ?',
       'ይህ የኦንላይን ዳሰሳ ጥናት ነው። የዳሰሳ ጥናቱን በጽሑፍ መልእክት ወይም በኢሜይል ለማጠናቀቅ ሊንኩን ለመቀበል ልትመርጡ ትችላላችሁ። እንዴት እንድናነጋግርዎት እንደሚፈልጉ ካሳወቁን በኋላ በ48 ሰአታት ውስጥ የዳሰሳ ጥናቱን እንዲያጠናቅቁ የሚጠይቅ መልእክት ይደርስዎታል። ከዚያም ማስፈንጠሪያውን ብቻ ጠቅ ያድርጉ እና የኦንላን ዳሰሳ ጥናቱን በመረጡት ቋንቋ ይመልሱ። በስልክዎ፣ በታብሌትዎ ወይም በኮምፒተርዎ ላይ ማጠናቀቅ ይችላሉ።'],
      ['ምን ያህል ጊዜ ይወስዳል?',
       'ከ 10 እስከ 15 ደቂቃዎች ያህል ይወስዳል።'],
      ['የሚሰጡ ማበረታቻዎች ይኖሩ ይሆን?',
       'አዎ። የዳሰሳ ጥናቱን ካጠናቀቁ በኋላ፣ የትም ቦታ መጠቀም የሚችሉበትን $10 ዋጋ ያለው የኦንላይን የስጦታ ካርድ ከMastercard ይቀበላሉ።'],
      ['ተሳትፎ ማድረግ ያለብኝ ለምንድን ነው?',
       'አጠቃላይ የMTM ዳሰሳ ጥናት በየአመቱ ለ15 ዓመታት ሲከናወን ቆይቷል፣ ሆኖም ግን ይህ ትልቅ ጥናት በካናዳ አዲስ ገቢዎች እና ሚዲያዎች ላይ ሲያተኩር ይህ የመጀመሪያው ነው። እርስዎ ይህንን የዳሰሳ ጥናት በማጠናቀቅ ለአዲስ ገቢዎች ድምጽ ለመስጠት እና አሰራሮቻቸውን በመመሪያ አውጪዎች እና የሚዲያ ኩባንያዎች የበለጠ እንዲረዱት በማድረግ ረገድ ትልቅ ሚና እየተጫወቱ ነው።'],
      ['መረጃው ለምን ጥቅም ላይ ይውላል?',
       'የመንግስትና የግሉ ዘርፍ ድርጅቶች ከMTM አዲስ ገቢ ዳሰሳ ጥናት የተገኙትን ግኝቶች ይጠቀማሉ። ለምሳሌ፦ የዚህ ዳሰሳ ጥናት ግኝቶች የካናዳ መንግስት አዲስ ገቢዎችን እንደ ቡድን እና ስለ ቴክኖሎጂ አጠቃቀማቸው እንደ ኢንተርኔት መጠቀም፣ የሞባይል ስልኮች ባለቤትነት ፣ የኬብል ምዝገባ፣ የማህበራዊ ሚዲያ እና የቲቪ ፍጆታን የመሳሰሉ ትክክለኛ መረጃዎችን እንዲያገኝ ያግዘዋል። ይህም የተሻሉ መመሪያዎችን ያሳውቃል እና ለእርስዎ እና ለሌሎች አዲስ ገቢዎች እንደ የህዝብ ጤና፣ የኢሚግሬሽን እና የሰፈራ አርእስቶች መረጃን የሚያስተላልፉበትን መንገድ ያሻሽላል። እንዲሁም የማህበራዊ አገልግሎቶችና የሚዲያ ኩባንያዎች ይዘትን ለመፍጠር እና ለአዲስ ገቢዎች ተስማሚና ምቹ የሆኑ ዜናዎችን እና መረጃዎችን ለማካፈል የተሻሉ ዘዴዎችን እንዲያዘጋጁ ያግዛል።']
    ]
  },

  /* ═══════════════════════════════════════════════════════════════════════════
     HINDI
     ═══════════════════════════════════════════════════════════════════════════ */
  hi: {
    langValue: 'hindi',
    title: 'MTM नवागंतुक सर्वेक्षण',
    intro: 'यदि आप पिछले 5 वर्षों के अंदर कनाडा आए हैं, तो कृपया नीचे दिए गए संपर्क के अपने पसंदीदा तरीके को भरकर MTM नवागंतुक सर्वेक्षण में भाग लें। सर्वेक्षण के अंत में आपको LEO प्लैटफॉर्म पर भेजा जाएगा जहां आपसे आपके संपर्क से जुड़ी थोड़ी-बहुत जानकारी देने का अनुरोध किया जाएगा।',
    highlight: 'अगर आप चाहते हैं कि आपको $10 वाला प्रीपेड कार्ड मिले, तो आपको कनाडा में एक मान्य फोन नंबर और पता प्रदान करना होगा।',

    phoneLabel: 'फोन नंबर',
    emailLabel: 'ईमेल',
    confirmEmailLabel: 'ईमेल की पुष्टि करें',
    phonePlaceholder: 'फोन नंबर',
    emailPlaceholder: 'ईमेल',
    confirmEmailPlaceholder: 'ईमेल की पुष्टि करें',
    phonePlaceholderLong: 'e.g. 416-555-0123',
    emailPlaceholderLong: 'e.g. name@example.com',
    confirmEmailPlaceholderLong: 'e.g. name@example.com',

    heardLabel: 'आपने एमटीएम न्यूकमर सर्वे के बारे में कैसे सुना?',
    heardDefault: '-- चुनें --',
    heardOptions: [
      'शरणार्थी 613',
      'कोई अन्य बसाहट संगठन',
      'सामुदायिक कार्यक्रम (जैसे कि न्यूकमर दिवस)',
      'परिवार या मित्र',
      'सोशल मीडिया',
      'अन्य',
      'पता नहीं'
    ],

    error: 'ERROR – You need to provide your phone number and email address in the fields.',
    submit: 'सबमिट करें',
    success: 'Thank you for providing your information! You now have registered to take part in the MTM Newcomers survey. You will be contacted soon.',

    faqTitle: 'अक्सर पूछे जाने वाले प्रश्न',
    faq: [
      ['यह किस प्रकार का सर्वेक्षण है?',
       'MTM नवागंतुक कनाडा में नवागंतुकों के लिए एकमात्र मीडिया और टेक्नोलॉजी सर्वेक्षण है। यह उन लोगों पर केंद्रित है जो पिछले 5 वर्षों के भीतर कनाडा आए हैं और यह समझने में मदद करते हैं कि नए लोग कैसे टीवी और वीडियो देखते हैं, संगीत सुनते हैं, दोस्तों और परिवार से जुड़ते हैं और उनकी खोज खबर लेते हैं। इसे 12 विभिन्न भाषाओं में आयोजित किया जाएगा: अंग्रेज़ी, फ्रेंच, टैगालोग, कैंटोनीज़, मंदारिन, पंजाबी, अरबी, स्पेनिश, हिंदी, स्वाहिली, यूक्रेनी और अम्हारिक।'],
      ['यह सर्वेक्षण कौन कर रहा है?',
       'MTM नवागंतुक मीडिया टेक्नोलॉजी मॉनिटर (MTM) का एक हिस्सा है। MTM कनाडा में उच्चतम गुणवत्ता वाला मीडिया अध्ययन है। पिछले 15 वर्षों में, MTM ने 300,000 से अधिक कनाडा के निवासियों के साथ बात की है, जिससे यह अपनी तरह का सबसे सटीक और व्यापक मीडिया टेक्नोलॉजी ट्रैकिंग सर्वेक्षण बन गया है।'],
      ['क्या मेरे जवाब गोपनीय रखे जाएंगे?',
       'हां। MTM सीबीसी/रेडियो-कनाडा की संपत्ति है और आपके जवाब गोपनीय रखे जाएंगे। आपकी व्यक्तिगत जानकारी किसी अन्य के साथ साझा नहीं की जाएगी और इस सर्वेक्षण को समाप्त करने के बाद आपको न कुछ बेचा जाएगा और न ही फिर से संपर्क किया जाएगा। आपकी व्यक्तिगत जानकारी को बेचा या साझा नहीं किया जाएगा और आपका नाम सर्वेक्षण के परिणामों या भविष्य के किसी सर्वेक्षण में शामिल नहीं किया जाएगा।'],
      ['मैं इस सर्वेक्षण को कैसे पूरा करूंगा?',
       'यह एक ऑनलाइन सर्वेक्षण है। आप टेक्स्ट मैसेज या ईमेल के माध्यम से सर्वेक्षण पूरा करने के लिए लिंक प्राप्त करना चुन सकते हैं। जब आप हमें बता देते हैं कि आप किस प्रकार संपर्क करना चाहते हैं, तो 48 घंटों के भीतर आपको एक मैसेज प्राप्त होगा जिसमें आपसे सर्वेक्षण पूरा करने के लिए कहा जाएगा। इसके बाद, आप केवल लिंक पर क्लिक करें और अपनी चुनी हुई भाषा में ऑनलाइन सर्वेक्षण का जवाब दें। आप इसे अपने फोन, टैबलेट या कंप्यूटर पर पूरा कर सकते हैं।'],
      ['इसमें कितना समय लगेगा?',
       'इसमें 10 से 15 मिनट का समय लगता है।'],
      ['क्या इसके लिए कोई प्रोत्साहन दिया जाएगा?',
       'हां। सर्वेक्षण पूरा करने के बाद, आपको मास्टरकार्ड की ओर से $10 कीमत का एक ऑनलाइन गिफ्ट कार्ड प्राप्त होगा, जिसका उपयोग आप कहीं भी कर सकते हैं।'],
      ['मुझे इसमें भाग क्यों लेना चाहिए?',
       'सामान्य MTM सर्वेक्षण पिछले 15 वर्षों से हर वर्ष किया जा रहा है, लेकिन यह पहली बार है जब इस बड़े अध्ययन ने कनाडा में नवागंतुकों और मीडिया पर ध्यान केंद्रित किया है। इस सर्वेक्षण को पूरा करके, आप नवागंतुकों के मुद्दों को सामने लाने में मदद करने और नीति निर्माताओं और मीडिया कंपनियों द्वारा उनकी प्रथाओं को बेहतर ढंग से समझने में मदद करने में बहुत महत्वपूर्ण भूमिका निभा रहे हैं।'],
      ['डेटा का उपयोग किस कार्य के लिए किया जाएगा?',
       'MTM नवागंतुक सर्वेक्षण के निष्कर्षों का उपयोग सरकारी और निजी क्षेत्र के संगठन करेंगे। उदाहरण के लिए, इस सर्वेक्षण के निष्कर्षों से कनाडा सरकार को एक समूह के रूप में नवागंतुकों की अधिक सटीक तस्वीर और उनके द्वारा टेक्नोलॉजी के उपयोग, जैसे इंटरनेट, सेल फोन, केबल की सदस्यता, सोशल मीडिया और टीवी के उपयोग की जानकारी प्राप्त करने में मदद मिलेगी। यह बेहतर नीतियों को सूचित करेगा और सार्वजनिक स्वास्थ्य, आप्रवास और निपटान जैसे विषयों पर आपको और अन्य नवागंतुकों को जानकारी देने के तरीके में सुधार करेगा। यह सामाजिक सेवाओं और मीडिया कंपनियों को नवागंतुकों के लिए सामग्री बनाने, प्रासंगिक और सुविधाजनक समाचार और जानकारी साझा करने के लिए बेहतर रणनीति विकसित करने में भी मदद करेगा।']
    ]
  },

  /* ═══════════════════════════════════════════════════════════════════════════
     UKRAINIAN
     ═══════════════════════════════════════════════════════════════════════════ */
  uk: {
    langValue: 'ukrainian',
    title: 'Опитування новоприбулих MTM Newcomers',
    intro: "Якщо ви прибули до Канади протягом останніх 5 років, просимо вас взяти участь в опитуванні новоприбулих MTM Newcomers, зазначивши зручний для вас спосіб зв\u2019язку нижче. Наприкінці опитування вас буде перенаправлено на платформу LEO, де вам запропонують ввести деяку контактну інформацію.",
    highlight: 'Щоб отримати дебетову картку номіналом 10 доларів, вам необхідно надати дійсний номер телефону та адресу в Канаді.',

    phoneLabel: 'Номер телефону',
    emailLabel: 'Адреса електронної пошти',
    confirmEmailLabel: 'Підтвердіть адресу електронної пошти',
    phonePlaceholder: 'номер телефону',
    emailPlaceholder: 'адреса електронної пошти',
    confirmEmailPlaceholder: 'Підтвердіть адресу електронної пошти',
    phonePlaceholderLong: 'e.g. 416-555-0123',
    emailPlaceholderLong: 'e.g. name@example.com',
    confirmEmailPlaceholderLong: 'e.g. name@example.com',

    heardLabel: 'Як ви дізналися про опитування MTM для новоприбулих?',
    heardDefault: '-- Оберіть --',
    heardOptions: [
      'Організація «Refugee 613»',
      'Інша організація з адаптації',
      'Громадський захід (наприклад, День новоприбулих)',
      'Родина чи друзі',
      'Соціальні мережі',
      'Інше',
      'Не знаю'
    ],

    error: 'ПОМИЛКА: у цих полях вам необхідно надати ваш номер телефону та адресу електронної пошти.',
    submit: 'подати',
    success: "Дякуємо, що ви надали інформацію про себе! Тепер вас зареєстровано для участі в опитуванні новоприбулих MTM Newcomers. З вами скоро зв\u2019яжуться.",

    faqTitle: 'Поширені запитання',
    faq: [
      ['Що це за опитування?',
       "MTM Newcomers – це єдине опитування щодо ЗМІ та технологій для новоприбулих у Канаді. У центрі його уваги – люди, які приїхали до Канади протягом останніх 5 років, і воно покликане зрозуміти, як новоприбулі дивляться телевізор і відео, слухають музику, спілкуються з друзями та родиною і дізнаються новини. Його проводитимуть 12 різними мовами: англійською, французькою, тагальською, кантонською, мандаринською, пенджабською, арабською, іспанською, амхарською, хінді, українською та суахілі."],
      ['Хто проводить це опитування?',
       "MTM Newcomers є частиною Media Technology Monitor (MTM). MTM – це найякісніше дослідження засобів масової інформації в Канаді. За останні 15 років у рамках MTM було опитано понад 300 000 жителів Канади, що робить його найточнішим і найповнішим у своєму класі опитуванням з відстеження медіа-технологій."],
      ['Чи залишаться мої відповіді конфіденційними?',
       "Так. MTM є власністю CBC/Radio-Canada, і ваші відповіді залишаться конфіденційними. Вашу персональну інформацію нікому не передаватимуть, вам нічого не продаватимуть і не зв\u2019язуватимуться з вами після того, як ви завершите це опитування. Вашу персональну інформацію не продаватимуть і не поширюватимуть, а ваше ім\u2019я не буде пов\u2019язане ані з результатами опитування, ані з будь-якими іншими майбутніми опитуваннями."],
      ['Як мені пройти це опитування?',
       "Це опитування проходить онлайн. Ви можете отримати посилання для проходження опитування текстовим повідомленням або електронною поштою. Протягом 48 годин після того, як ви повідомите нам зручний для вас спосіб зв\u2019язку, ви отримаєте повідомлення з проханням пройти опитування. Потім просто перейдіть за посиланням і пройдіть опитування онлайн обраною мовою. Ви можете пройти його на телефоні, планшеті або комп\u2019ютері."],
      ['Скільки часу на це потрібно?',
       'На це потрібно 10–15 хвилин.'],
      ['Чи передбачені якісь заохочення?',
       'Так. Пройшовши опитування, ви отримаєте подарункову картку для покупок онлайн номіналом 10 доларів від Mastercard, яку зможете використати будь-де.'],
      ['Навіщо мені брати участь?',
       'Загальне опитування MTM проводиться щороку протягом 15 років, але це перше дослідження такого масштабу з акцентом на новоприбулих мігрантах і ЗМІ в Канаді. Проходячи це опитування, ви відіграєте дуже важливу роль у сприянні тому, щоб голос новоприбулих почули, і щоб політики та медіа-компанії могли краще зрозуміти їхні звичаї.'],
      ['Для чого будуть використані ці дані?',
       "Результати опитування новоприбулих MTM Newcomers використовуватимуть урядові та приватні організації. Зокрема, результати цього опитування допоможуть канадському уряду отримати точніше уявлення про новоприбулих як групу та про використання ними технологій, як-от: доступ до Інтернету, наявність мобільних телефонів, передплата кабельного телебачення, соціальні мережі та споживання телевізійного контенту. Це допоможе вдосконалити політику й покращити спосіб донесення до вас та до інших новоприбулих інформації на такі теми, як громадське здоров\u2019я, імміграція та адаптація. Це також допоможе соціальним службам і медіа-компаніям розробляти кращі стратегії створення контенту та поширення новин і інформації, актуальної та зручної для новоприбулих."]
    ]
  }

};
