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
        callback(["a", "b"]);
      });
  }
};
