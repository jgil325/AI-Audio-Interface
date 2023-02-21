import firebase from "./firebase";
import { useEffect, useLayoutEffect, useState } from "react";
import * as d3 from "d3";
import d3Cloud from 'd3-cloud';

interface Word {
    text: string;
    size: number;  
    x?: number;
    y?: number;
    rotate?: number;
}


function WordCloud() {
  // Set up state to store the collection names and the loaded state
  const [collectionNames, setCollectionNames] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Set up Firestore and Storage references
  const db = firebase.firestore();
  const storage = firebase.storage();

  useEffect(() => {
    // Get the collection names from Firestore and store them in an array
    const firestore = firebase.firestore() as any;
    const collections = firestore.listCollections();
    setCollectionNames(collections);
    setLoaded(true);
  }, []);

  

  useEffect(() => {
    if (loaded) {
      // Set up the word cloud layout using d3-cloud
      const layout = d3Cloud<Word>()
        .size([800, 400])
        .words(collectionNames.map((name) => ({ text: name, size: 10 + Math.random() * 90 })))
        .padding(5)
        .rotate(() => Math.floor(Math.random() * 4) * 90)
        .font('Impact')
        .fontSize((d) => d.size)
        .on('end', (words) => {

          const container = d3.select('#wordCloudContainer');
          container.selectAll('*').remove();

          container
            .append('svg')
            .attr('width', layout.size()[0])
            .attr('height', layout.size()[1])
            .append('g')
            .attr('transform', `translate(${layout.size()[0] / 2},${layout.size()[1] / 2})`)
            .selectAll('text')
            .data(words)
            .enter()
            .append('text')
            .style('font-size', (d) => `${d.size}px`)
            .style('font-family', 'Impact')
            .style('fill', '#333')
            .attr('text-anchor', 'middle')
            .attr('transform', (d) => `translate(${d.x},${d.y})rotate(${d.rotate})`)
            .text((d) => d.text)
            .on('click', (d) => {
                const db = firebase.firestore();
                db.collection(d.text)
                  .get()
                  .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                      const audio = new Audio(doc.data().url);
                      audio.play();
                    });
                  });
              });
          });

        // Draw the word cloud on the page
      layout.start();

      

      
    }
    
  }, [loaded, collectionNames]);



  return (
    <div id="wordCloudContainer" />
  );
}

export default WordCloud;

// function WordCloud() {
// //Stores collection names to later use as words in word cloud
//     //Empty Array
//     const [collectionNames, setCollectionNames] = useState<string[]>([]);
//     //Values not yet loaded
//     const[loaded, setLoaded] = useState(false);

//     //Setting up references for firestore and storage
//     const db = firebase.firestore();
//     const storage = firebase.storage();
//     const firestore = firebase.firestore() as any;
//     const collections = firestore.listCollections()

//     //Access the collection names
//     useEffect(() => {
//         const firestore = firebase.firestore() as any;
//         const collections = firestore.listCollections();
//         setCollectionNames(collections);
//         setLoaded(true);

//     }, []);

//     useEffect(() => {
//         if (loaded) {

//             const layout = d3Cloud()
//             .size([800, 400])
//             .words(collectionNames.map(name => ({text: name, size: 10 + Math.random() * 90})))
//             .padding(5)
//             .rotate(() => Math.floor(Math.random() * 4) * 90)
//             .font('Impact')
//             //.fontSize()
//             .on('end', draw);

//             layout.start();

//             function draw(words) {
//                 d3.select('#wordCloudContainer')
//                     .append('svg')
//                     .attr('width', layout.size()[0])
//                     .attr('height', layout.size()[1])
//                     .append('g')
//                     .attr('transform', `translate(${layout.size()[0] / 2}, ${layout.size()[1] / 2})`)
//                     .selectAll('text')
//                     .data(words)
//                     .enter().append('text')
//                     //.style('font-size', d => `${d.size}px`)
//                     .style('font-family', 'Impact')
//                     .style('fill', 'white')
//                     .attr('text-anchor', 'middle')
//                     //.attr('transform', d => `translate(${d.x}, ${d.y}) rotate(${d.rotate})`)
//                     //.text(d => d.text)
//                     .on('click', async (d) => {
//                         // Retrieve the associated audio file from Storage
//                         const audioRef = storage.ref(`${d.text}/audio.mp3`);
//                         const audioUrl = await audioRef.getDownloadURL();
          
//                         // Play the audio file using the Audio API
//                         const audio = new Audio(audioUrl);
//                         audio.play();
//                       });
//                     }
//                 }
//               }, [loaded, collectionNames]);

//               return (
//                 <div id="wordCloudContainer" />
//               );
            
//         }

//         export default WordCloud;
//     //Draw layout on screen
    

// function draw(words) {
        //     d3.select('#wordCloudContainer')
        //       .append('svg')
        //         .attr('width', layout.size()[0])
        //         .attr('height', layout.size()[1])
        //       .append('g')
        //         .attr('transform', `translate(${layout.size()[0] / 2}, ${layout.size()[1] / 2})`)
        //       .selectAll('text')
        //         .data(words)
        //       .enter().append('text')
        //         .style('font-size', d => `${d.size}px`)
        //         .style('font-family', 'Impact')
        //         .style('fill', 'white')
        //         .attr('text-anchor', 'middle')
        //         .attr('transform', d => `translate(${d.x}, ${d.y}) rotate(${d.rotate})`)
        //         .text(d => d.text)
        //         .on('click', async (d) => {
        //           // Retrieve the associated audio file from Storage
        //           const audioRef = storage.ref(`${d.text}/audio.mp3`);
        //           const audioUrl = await audioRef.getDownloadURL();
        
        //           // Play the audio file using the Audio API
        //           const audio = new Audio(audioUrl);
        //           audio.play();
        //         });
          //}

