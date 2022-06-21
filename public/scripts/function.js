const Nama = document.getElementById('nama');
const kehadiran = document.getElementById('kehadiran');
const pesan = document.getElementById('pesan');

const database = firebase.database();
const db = firebase.firebase();

const userRef = database.ref('users');
var tbl = document.getElementById('dataTabel');
var rowDashboard = 1;

userRef.once('value', function(snapshot){
    snapshot.foreach(function(childSnapshot) {

        var ChildData = childSnapshot.val();
        var row = tbl.insertRow(rowDashboard);

        var namanya = row.insertCell(0);
        var kehadirannya = row.insertCell(1);
        var pesannya = row.insertCell(2);

        namanya.appendChild(document.createTextNode(childDat.namanya));
        kehadirannya.appendChild(document.createTextNode(childDat.kehadirannya));
        pesannya.appendChild(document.createTextNode(childDat.pesannya));

    })
}

)