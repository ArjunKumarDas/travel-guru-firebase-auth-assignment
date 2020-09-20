const tourData = [
    {
        id: '1',
        place: 'COX`S BAZER',
        pakage: 99.99,
        img: 'https://2.bp.blogspot.com/-Dw6B95Tjtcg/VnSEyLaDZbI/AAAAAAAAAM8/pj9Kb16qtnU/s1600/Saint%2BMartins.jpg',
        description: 'Coxs Bazar is located 150 km (93 mi) south of the divisional headquarter city of Chittagong.Coxs Bazar town has an area of 6.85 km2 (2.64 sq mi), and is bounded by Bakkhali River on the north and East, Bay of Bengal in the West, and Jhilwanj Union in the south .The beach in Coxs Bazar has a gentle slope and with an unbroken length of 155 km (96 mi) it is often termed the longest natural unbroken sea beach in the world.'
    },
    {
        id: '2',
        place: 'SREEMANGAL',
        pakage: 99.99,
        img: 'https://naturedesign247.files.wordpress.com/2013/08/sitakunda-hill-bangladesh.jpg',
        description: 'Sreemangal is located at 24.3083°N 91.7333°E. It has 43,952 households and total area 450.74 km². It is bordered by Moulvibazar Sadar to the north, Tripura to the south, Kamalganj to the east and Chunarughat, Nabiganj and Bahubal to the west'
    },
    {
        id: '3',
        place: 'SUNDARBANS',
        pakage: 99.99,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Ratargul_Swamp_Forest%2C_Sylhet..jpg/300px-Ratargul_Swamp_Forest%2C_Sylhet..jpg',
        description: 'The Sundarban forest lies in the vast delta on the Bay of Bengal formed by the super confluence of the Ganges, Hooghly, Padma, Brahmaputra and Meghna rivers across southern Bangladesh. The seasonally flooded Sundarbans freshwater swamp forests lie inland from the mangrove forests on the coastal fringe.'
    },
    {
        id: '4',
        place: 'COX`S BAZER',
        pakage: 99.99,
        img: 'https://img-a.udemycdn.com/course/240x135/1778502_f4b9_11.jpg',
        description: 'Coxs Bazar is located 150 km (93 mi) south of the divisional headquarter city of Chittagong.Coxs Bazar town has an area of 6.85 km2 (2.64 sq mi), and is bounded by Bakkhali River on the north and East, Bay of Bengal in the West, and Jhilwanj Union in the south .The beach in Coxs Bazar has a gentle slope and with an unbroken length of 155 km (96 mi) it is often termed the longest natural unbroken sea beach in the world.'
    },
    {
        id: '5',
        place: 'SREEMANGAL',
        pakage: 99.99,
        img: 'https://www.daily-sun.com/assets/archive/images/print-edition/2016/October/30-10-2016/Daily-Sun-30-01-30-10-2016.jpg',
        description: 'Sreemangal is located at 24.3083°N 91.7333°E. It has 43,952 households and total area 450.74 km². It is bordered by Moulvibazar Sadar to the north, Tripura to the south, Kamalganj to the east and Chunarughat, Nabiganj and Bahubal to the west'
    },
    {
        id: '6',
        place: 'Mahasthangarh',
        pakage: 99.99,
        img: 'https://static.trip101.com/paragraph_media/pictures/001/971/376/large/1024px-Mahasthangar_Museum_Bogra_Bangladesh_%25289%2529.JPG?1596018142',
        description: 'Mahasthangarh is one of Bangladesh’s earliest urban archaeological sites. This site contains the ruins of an ancient city, dating back to at least the 3rd century BC. It was discovered all the way back in the 1800s, with excavations starting in the late 1920s. '
    },
    {
        id: '7',
        place: 'Rabindranath Tagore Shilaidaha Kuthibari',
        pakage: 99.99,
        img: 'https://static.trip101.com/paragraph_media/pictures/001/971/375/large/Tagore_Kuthibari.jpg?1596018142',
        description: 'If you’re a lover of poetry and music, it’s worth stopping by Rabindranath Tagore’s Shilaidaha Kuthibari. Tagore is a treasured writer who won the Nobel Prize in Literature — the first non-European to do so. Tagore stayed at Shilaidaha Kuthibari, a country house, writing during his stay here.'
    },
    {
        id: '8',
        place: 'The Liberation War Museum',
        pakage: 99.99,
        img: 'https://miro.medium.com/max/960/1*W8386j7zjsFz9XsM3P1ajg.jpeg',
        description: 'Sreemangal is located at 24.3083°N 91.7333°E. It has 43,952 households and total area 450.74 km². It is bordered by Moulvibazar Sadar to the north, Tripura to the south, Kamalganj to the east and Chunarughat, Nabiganj and Bahubal to the west'
    },
    {
        id: '9',
        place: 'Shalban Bihar',
        pakage: 99.99,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXv4TfqU323E4RFuSSE9y5cvunRrUvVVSazw&usqp=CAU',
        description: 'ere we have another historic site sitting in the hills of Comilla, Bangladesh. Shalban Bihar was once a Buddhist monastery, with more than 100 cells for monks, and was in use from the 7th to the 12th centuries. Excavations have been taking place, revealing that the site has been rebuilt four times during its use. '
    },
    {
        id: '10',
        place: 'Lalbagh Fort',
        pakage: 99.99,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIuCR1Z_5ZCJFoSheoF0wZktJZlF6l3NH4ow&usqp=CAU',
        description: 'Lalbagh Fort is located in Dhaka and dates back to the 17th century. It’s an excellent piece of architecture of the Mughal Empire, but there’s one catch: it’s not complete. Construction began for a Mughal prince and later emperor. He was called away, and the Governor of Dhaka then took over.'
    },
    {
        id: '11',
        place: 'Kotila Mura',
        pakage: 99.99,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_FVpMh_XT5f5Dez9V-fqtaLincRCieIvVHg&usqp=CAU',
        description: 'Up next we have another historic Buddhist site. Kotila Mura dates back to the 7th century AD, and consists of three stupas, which represent the Three Jewels is Buddhism: Buddha (order), Dharma (discipline), and Sangha (unity). Archaeological excavations have taken place on the site since the 1950s, uncovering items like sculptures and gold coins'
    },
    {
        id: '12',
        place: 'Somapura Mahavira',
        pakage: 99.99,
        img: 'https://4.bp.blogspot.com/-fBRjBY-Z6Qg/VnSGGkWg_ZI/AAAAAAAAANk/8h6pPlZLV8c/s1600/Sundarban.jpg',
        description: 'Somapura Mahavira is a famous Buddhist vihara, or monastery, and is an important archaeological site in Bangladesh. It dates back to the 8th century AD and has an influence on Buddhist architecture throughout Asia. Many artefacts have been recovered during excavations, including sculpture and pottery.'
    },
  
    ];
    
    export default tourData;