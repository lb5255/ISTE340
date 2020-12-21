var selectInfo = {
     "choices": [
        {   "key": "Main",
            "option_1": "Netflix",
            "option_2": "Hulu",
            "option_3": "Disney+",
            "description": "Select a Streaming Service",
            "depth": 0 },
         
        {   "key": "Netflix",
            "option_1": "Comedies",
            "option_2": "Dramas",
            "description": "Select a Genre",
            "depth": 1 },
         
        {   "key": "Hulu",
            "option_1": "Thriller", //parasite or the quite place
            "option_2": "Rom-Com", //
            "description": "Select a Genre",
            "depth": 1 },
         
         {  "key": "Disney+",
            "option_1": "Princesses",
            "option_2": "Animals",
            "option_3": "Musicals",
            "description": "Select a Genre",
            "depth": 1 },
         
         {  "key": "Comedies",
            "option_1": "Will Ferrell", //  the other guys
            "option_2": "Kumail Nanjiani", //the lovebirds
            "description": "Select an Actor",
            "depth": 2 },
         
         {  "key": "Dramas",
            "option_1": "Jim Carrey", // eternal sunshine of the spotlesss mind
            "option_2": "Scarlett Johansson", // marriage story
            "description": "Select an Actor",
            "depth": 2 },
         
        {  "key": "Thriller",
            "option_1": "Kang Ho Song", // parasite
            "option_2": "John Krasinski", // the quite place
            "description": "Select an Actor",
            "depth": 2 },
         
        {  "key": "Rom-Com",
            "option_1": "Andy Samberg", // palm springs
            "option_2": "Kristen Bell", // forgetting sarah mashal
            "description": "Select an Actor",
            "depth": 2 },
         
        {  "key": "Princesses",
            "option_1": "2D animation", // mulan
            "option_2": "3D animation",  // tangled
            "description": "Select an Animation Style",
            "depth": 2 },
         
        {  "key": "Animals",
            "option_1": "Cats", //aristocats
            "option_2": "Dogs", // 101 dalmations
            "option_3": "Lions", // 101 dalmations
            "description": "Select an Animal",
            "depth": 2 },
         
        {  "key": "Musicals",
            "option_1": "Robert Wise", //sound of music
            "option_2": "Thomas Kail", // hamilton
            "description": "Select a Director",
            "depth": 2 },
         
        {  "key": "Will Ferrell",
            "movieName": "The Other Guys",
            "movieDesc": "A conspiracy like this calls for the best cops around. They aren't available ... so this duo will have to do.",
            "src": "https://www.youtube.com/embed/D6WOoUG1eNo", 
            "width": "560",
            "height": "315",
            "depth": 3 },
         
        {  "key": "Kumail Nanjiani",
            "movieName": "The Lovebirds",
            "movieDesc": "On the brink of breaking up, a couple gets unintentionally embroiled in a bizarre murder mystery. As they get closer to clearing their names and solving the case, they need to figure out how they, and their relationship, can survive the night.",
            "src": "https://www.youtube.com/embed/YzPq8uVgLe8", 
            "width": "560",
            "height": "315",
            "depth": 3 },
         
        {  "key": "Jim Carrey",
            "movieName": "Eternal Sunshine of the Spotlesss Mind",
            "movieDesc": "After learning that his ex-girlfriend had an experimental medical procedure to purge all memories of him, a man decides to do the same with her.",
            "src": "https://www.youtube.com/embed/yE-f1alkq9I", 
            "width": "560",
            "height": "315",
            "depth": 3 },
         
         {  "key": "Scarlett Johansson",
            "movieName": "Marriage Story",
            "movieDesc": "A stage director and his actor wife struggle through a gruelling, coast-to-coast divorce that pushes them to their personal and creative extremes.",
            "src": "https://www.youtube.com/embed/BHi-a1n8t7M", 
            "width": "560",
            "height": "315",
            "depth": 3 },
                  
         {  "key": "Kang Ho Song",
            "movieName": "Parasite",
            "movieDesc": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
            "src": "https://www.youtube.com/embed/5xH0HfJHsaY", 
            "width": "560",
            "height": "315",
            "depth": 3 },
                          
         {  "key": "John Krasinski",
            "movieName": "The Quiet Place",
            "movieDesc": "A family must live in silence to avoid mysterious creatures that hunt by sound. Knowing that even the slightest whisper or footstep can bring death, Evelyn and Lee are determined to find a way to protect their children while desperately searching for a way to fight back.",
            "src": "https://www.youtube.com/embed/WR7cc5t7tv8", 
            "width": "560",
            "height": "315",
            "depth": 3 },
         
        {  "key": "Andy Samberg",
            "movieName": "Palm Springs",
            "movieDesc": "Stuck in a time loop, two wedding guests develop a budding romance while living the same day over and over again.",
            "src": "https://www.youtube.com/embed/CpBLtXduh_k", 
            "width": "560",
            "height": "315",
            "depth": 3 },
                  
        {  "key": "Kristen Bell",
            "movieName": "Forgetting Sarah Marshall",
            "movieDesc": "Full-frontal hilarity ensues when a depressed composer winds up at the same Hawaiian resort as his TV star ex-girlfriend and her new boyfriend.",
            "src": "https://www.youtube.com/embed/K4xD8ZMdJms", 
            "width": "560",
            "height": "315",
            "depth": 3 },
                           
        {  "key": "2D animation",
            "movieName": "Mulan",
            "movieDesc": "To save her ailing father from serving in the Imperial Army, a fearless young woman disguises herself as a man to battle northern invaders in China.",
            "src": "https://www.youtube.com/embed/HKH7_n425Ss", 
            "width": "560",
            "height": "315",
            "depth": 3 },
                                    
        {  "key": "3D animation",
            "movieName": "Tangled",
            "movieDesc": "When the kingdom's most wanted bandit is taken hostage by Rapunzel - a teen with 70 feet of golden hair who's looking to escape the tower where she's been locked away for years - the unlikely dio sets off on a hair-raising escapade",
            "src": "https://www.youtube.com/embed/2f516ZLyC6U", 
            "width": "560",
            "height": "315",
            "depth": 3 },
                                             
        {  "key": "Cats",
            "movieName": "The Aristocats",
            "movieDesc": "A pedigreed cat and her three kittens are catnapped by a greedy butler who hopes to gain the inheritance left to them. Things look hopeless until they befriended an easygoing alley cat.",
            "src": "https://www.youtube.com/embed/U5cJlj7YGt8", 
            "width": "560",
            "height": "315",
            "depth": 3 },
                                                      
        {  "key": "Dogs",
            "movieName": "101 Dalmatians",
            "movieDesc": "Pongo and Perdita lead a heroic cast of animals on a dramatic quest to rescue their dalmatian puppies from the villainous Cruella De Vil.",
            "src": "https://www.youtube.com/embed/x4Nkw59KFBw", 
            "width": "560",
            "height": "315",
            "depth": 3 },
         
        {  "key": "Lions",
            "movieName": "The Lion King",
            "movieDesc": "This is the story of Simba, a young lion who is to succeed his father, Mufasa, as King of the Pride Lands; however, after Simba's paternal uncle Scar murders Mufasa, Simba is manipulated into thinking he was responsible and flees into exile. After growing up in the company of the carefree outcasts Timon and Pumbaa, Simba receives valuable perspective from his childhood friend, Nala, and his shaman, Rafiki, before returning to challenge Scar to end his tyranny and take his place in the Circle of Life as the rightful King.",
            "src": "https://www.youtube.com/embed/4sj1MT05lAA", 
            "width": "560",
            "height": "315",
            "depth": 3 },
         
        {  "key": "Robert Wise",
            "movieName": "The Sound of Music",
            "movieDesc": "A woman leaves an Austrian convent to become a governess in the home of a widowed naval captain with seven children, and brings a new love of life and music into the home.",
            "src": "https://www.youtube.com/embed/UY6uw3WpPzY", 
            "width": "560",
            "height": "315",
            "depth": 3 },
         
        {  "key": "Thomas Kail",
            "movieName": "Hamilton",
            "movieDesc": "The original Broadway production of the award-winning musical that tells the story of American Founding Father, Alexander Hamilton.",
            "src": "https://www.youtube.com/embed/DSCKfXpAGHc", 
            "width": "560",
            "height": "315",
            "depth": 3 },
     ] 
}
