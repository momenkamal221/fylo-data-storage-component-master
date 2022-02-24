let storageUsed=815;
let maxStorage=1000;

const storage=document.getElementById('storage');
storage.style.width=`${storageUsed/maxStorage*100}%`;