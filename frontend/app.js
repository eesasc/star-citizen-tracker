const user = window.location.pathname.includes("eesa") ? "eesa" : "popov";

// Tu peux réutiliser exactement ton code JS de tout à l'heure,
// en ajoutant seulement cette ligne à la fin de chaque intervalle :

function saveSession(activity, duration) {
  fetch('https://star-citizen-tracker.onrender.com/api/tracker', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user, activity, duration })
  });
}

// Dans activateActivity(), ajoute un appel régulier :
intervalActivity = setInterval(() => {
  activityTimers[name]++;
  elements[`counter${capitalize(name)}`].textContent = updateTime(activityTimers[name]);

  if (activityTimers[name] % 60 === 0) { // toutes les 60 sec
    saveSession(name, activityTimers[name]);
  }
}, 1000);
