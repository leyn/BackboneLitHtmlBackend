const errorHandler = require('../utils/errorHandler');
const advancedTableComponents = require('../models/AdvancedTableComponents');
module.exports.getAll = async (req, res) => {
    try{
        const list = await advancedTableComponents.find({});
        res.status(200).json(list);
    }catch(e) {
        errorHandler(res, e);
    }
};
module.exports.getById = async (req, res) => {
    try{
        const filt = await advancedTableComponents.find({
            id: req.params.id
        });
        res.status(200).json(filt);
    }catch(e) {
        errorHandler(res, e);
    }
};
module.exports.create = async (req, res) => {
    const filt = new advancedTableComponents({ 
        position: req.body.position,
        step: req.body.step,
        from: req.body.from,
        to: req.body.to,
        id: req.body.id
    });
    try{
        await filt.save();
        res.status(201).json(filt);
    }catch(e) {
        errorHandler(res, e);
    }
};
module.exports.update = async (req, res) => {
    try{
         const filt = await filter.findOneAndUpdate(
             {
                id: req.params.id
             },
             {
                 $set: req.body
             },
             {new: true}
         );
        res.status(200).json(filt);
    }catch(e) {
        errorHandler(res, e);
    }
};