import {addNewPlayer, getPlayer} from '../controller/PlayerController.js';

const routes = (app) => {
    app.route('/players')
    //GET endpoint
    .get(getPlayer)
    //POST endpoint
        .post(addNewPlayer);
}

export default routes;

