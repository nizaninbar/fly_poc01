export default {
  getContacts(callback) {
    //https://inbar01.api.crm.dynamics.com/api/data/v9.1/contacts?$select=_accountid_value,contactid,fullname
    fetch("http://localhost:59146/api/Contact/Get", {
      method: "Get"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        callback(data);
      })
      .catch(e => {
        console.log("error " + e);
        var d = [
          {
            FullName: "ניניו אל",
            EMailAddress1: "customer@contoso.com"
          },
          {
            FullName: "מוטי ארואסטי",
            EMailAddress1: "admin@contoso.com"
          },
          {
            FullName: "שלמה ניצן",
            EMailAddress1: "vincent@adatum.com"
          },
          {
            FullName: "סטיב אוסטין",
            EMailAddress1: "Adrian@adventure-works.com"
          },
          {
            FullName: "פטר זאב",
            EMailAddress1: "Cathan@alpineskihouse.com"
          },
          {
            FullName: "נחש צפע",
            EMailAddress1: "brian@blueyonderairlines.com"
          },
          {
            FullName: "Walter Harp",
            EMailAddress1: "walter@cpandl.com"
          },
          {
            FullName: "Cat Francis",
            EMailAddress1: "Cat@cohowinery.com"
          },
          {
            FullName: "Forrest Chand",
            EMailAddress1: "Forrest@consolidatedmessenger.com"
          },
          {
            FullName: "Eva Corets",
            EMailAddress1: "evacorets@fabrikam.com"
          },
          {
            FullName: "Gabriele Cannata",
            EMailAddress1: "gabriele@fourthcoffee.com"
          },
          {
            FullName: "George Sullivan",
            EMailAddress1: "george@graphicdesigninstitute.com"
          },
          {
            FullName: "Tamer Salah",
            EMailAddress1: "TSalah@humongousinsurance.com"
          }
        ];
        //callback(d);
        console.log(d);
        callback([]);
      });
  }
};
