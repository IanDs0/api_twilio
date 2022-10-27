const axios = require('axios');
//webhook => ""

exports.createMessageTemplate = async function (req, res){
  const { img, preco, produto, link, telefone } = req.body;
  //console.log(req.body)
  if (!img || !preco || !produto || !link || !telefone) {
    return res.status(400).json({
      error: "Required Fields: name, language, category and components",
    });
  }

  const accountSid = process.env.TWILIO_ACCOUNT_SID; 
  const authToken = process.env.TWILIO_AUTH_TOKEN; 
  const client = require('twilio')(accountSid, authToken); 
  
  client.messages
      .create({
         from: 'whatsapp:+14155238886',
         body: 'Agora foi',
         to: 'whatsapp:+553198174161'
       })
      .then(message => console.log("message.sid"))
      .done();

  return res.status(200).json({
    error: "Required Fields: name, language, category and components",
  });
};

exports.createGroup = async function (req, res){

  const { img, preco, produto, link, telefone } = req.body;
  console.log(req.body)
  if (!img || !preco || !produto || !link || !telefone) {
    return res.status(400).json({
      error: "Required Fields: name, language, category and components",
    });
  }

}

