
/*Short API context demonstration in Access*/

const requester = api.getRequester().getDisplayName();
const permission = api.getEntitlement();
const locale = api.getLocale();

let message = '<strong>' + requester + '</strong>, ';

if (locale === 'en') {
    message += 'please notice:<br>The permission "<i>' + permission.name +
                '</i>" is applicable only for managers!';
}
else if (locale === 'fr') {
    message += 'Veuillez noter:<br>la permission "<i>' + permission.name +
                '</i>" est applicable pour les gestionnaires seulement!';
}
prop.message = message;