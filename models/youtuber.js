const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = Schema({
    nombre: {
        type: String,
        required: true,
        unique:true
    },
    canal_p: String,
    canal_s: String,
    edad: {
        type: Number,
        required: true
    },
    nacionalidad: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("User", UserSchema);