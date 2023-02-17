const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    framework: {
        type: String,
        required: true
    },
    rootDirectory: {
        type: String,
        required: true
    },
    packageManager: {
        type: String,
        required: true
    },
    githubRepoId: {
        type: String,
        required: true
    },
    ownerId: {
        type: String,
        required: true
    },
    port: {
	type: Number,
	required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('project', ProjectSchema);
