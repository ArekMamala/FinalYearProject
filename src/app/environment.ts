export const firebaseConfig = {
    apiKey: "AIzaSyCmhsja7GljbYlD_p25gyhHbaDhAPAItCQ",
    authDomain: "fir-ionic-ead44.firebaseapp.com",
    databaseURL: "https://fir-ionic-ead44.firebaseio.com",
    projectId: "fir-ionic-ead44",
    storageBucket: "fir-ionic-ead44.appspot.com",
    messagingSenderId: "999550617992",
    appId: "1:999550617992:web:f588b5a4a468e44970123d",
    measurementId: "G-WTB4C02K8R"
  };

  export const snapshotToArray = snapshot =>{
    let returnArray = [];
    snapshot.forEach(element => {
        let item = element.val();
        item.key = element.key;
        returnArray.push(item)
    });
    return returnArray;
}