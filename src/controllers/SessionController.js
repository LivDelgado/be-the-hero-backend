const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { id } = request.body;

        const ong = await connection('ong')
            .select('name')
            .where('id', id)
            .first();

        if (!ong) {
            return response.json(400).json({
                error: "No ONG found with this ID"
            });
        } else {
            return response.json(ong);
        }
    }
};