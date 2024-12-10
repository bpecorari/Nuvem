// Inicialização do SDK da CleverTap
(function () {
  var clevertap = {event:[], profile:[], region : 'us1', account:[], onUserLogin:[], notifications:[], privacy:[]};
  clevertap.account.push({ "id": "844-447-4Z7Z" }); // Substitua com o ID da sua conta CleverTap
  clevertap.privacy.push({optOut: false}); // Altere para 'true' se o opt-out for habilitado
  clevertap.privacy.push({useIP: false}); // Altere para 'true' se deseja rastrear o IP do usuário
  var wzrk = document.createElement('script');
  wzrk.type = 'text/javascript';
  wzrk.async = true;
  wzrk.src = ('https:' === document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/clevertap.min.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wzrk, s);
})();
