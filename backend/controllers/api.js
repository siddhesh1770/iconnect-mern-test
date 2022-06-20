

exports.create = async (req, res, ) => {
    try {
        res.status(201).json({
            success: true,
            message: 'Created',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}