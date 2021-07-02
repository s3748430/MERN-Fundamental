import mongoose from "mongoose";

import {PlayerSchema} from '../models/PlayerModel.js';

const Player = mongoose.model('Player', PlayerSchema);

export const addNewPlayer = (req, res) => {
    let newPlayer = new Player(req.body);

    newPlayer.save((err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json(Player);
    });
};

export const getPlayer = (req, res) => {

    Player.find({},(err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json(Player);
    });
};

export const getPlayerwithId = (req, res) => {

    Player.findById(req.params.PlayerId,(err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json(Player);
    });
};