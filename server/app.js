const express = require('express');
const cors = require('cors');
const generateEmail = require('./routes/generateEmail');
const generateBusinessPlan = require('./routes/generateBusinessPlan');
const generateBusinessModel = require('./routes/generateBusinessModel');
const generateOfferScript = require('./routes/generateOfferScript');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/generate-email', generateEmail);
app.use('/api/generate-business-plan', generateBusinessPlan);
app.use('/api/generate-business-model', generateBusinessModel);
app.use('/api/generate-offer-script', generateOfferScript);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
