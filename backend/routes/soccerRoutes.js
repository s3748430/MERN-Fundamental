import {addNewPlayer, 
        getPlayer,
        getPlayerwithId,
        updatePlayer,
        deletePlayer
    } 
    from '../controller/PlayerController.js';

const routes = (app) => {
    app.route('/players')
    
    //GET endpoint
    .get(getPlayer)

    //POST endpoint
        .post(addNewPlayer);

    app.route('/players/:PlayerId')
        //get specific player
        .get(getPlayerwithId)

        //update specific player
        .put(updatePlayer)

        //
        .delete(deletePlayer);
}

export default routes;



