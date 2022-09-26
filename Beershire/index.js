import fetch from "node-fetch";

async function get_data(){
  let response = await fetch('https://opensheet.elk.sh/14ePg5bfMRZpy7tQZCI2K8CXreXBN97BkDYTj8nedYH4/API-out');

  if (response.ok) { // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
    var text = await response.json(); // прочитать тело ответа как текст
  } else {
    alert("Ошибка HTTP: " + response.status);
  }

  let j = Object.keys(text).length

  var i = 5
  var values = []

  while (i > 0) {
    // console.log(text[j-i]) // как заказать 0:5
    values.push(text[j-i]['Organic'])
    i -= 1
  }
  return values
}


get_data()
/*
app.get('/:id', async (req, res) => {
  const id = req.params.id;
  const ingredient = await getIngredient(id);
  let retVal;
  if (ingredient) {
    retVal = {status: 'success', data: {ingredient: ingredient}};
  }
  else {
    res.status(404);
    retVal = {status: 'fail', data: {title: `Ingredient ${id} not found`}};
  }
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify(retVal));
});

async function getIngredient(id) {
  const auth = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });
  const api = google.sheets({version: 'v4', auth});
  const response = await api.spreadsheets.values.get({
    spreadsheetId: '11XhAYJN1wODTWuyVj1yUEztefPXQqdXMZ0idBx4j5HU/edit#gid=0',
    range: 'Sheet1!A:A'
  });

  for (let row of response.data.values) {
    if (row[0] == id) {
      return {
        id: row[0],
        name: row[1],
        amount: row[2],
        unit: row[3],
        warehouseLocation: row[4],
      }
    }
  }
}
*/