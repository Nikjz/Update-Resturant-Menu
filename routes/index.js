var Promise = require('Promise')
var sqlite = require('sqlite')
var express = require('express');
var router = express.Router();
const dbPromise = sqlite.open('./database/Menu Section.db', { Promise });

// To get all the Menu Sections
router.get('/menusection', async (req, res, next) => {
    try {
        const db = await dbPromise;
        const [MenuSection] = await Promise.all([
            db.all('SELECT * FROM menuSection')
        ]);
        res.send( {MenuSection});
    } catch (err) {
        next(err);
    }
});

// To get Menu Section by ID
router.get('/menusection/:id', async (req, res, next) => {
    try {
        const db = await dbPromise;
        const [MenuSection] = await Promise.all([
            db.all('SELECT * FROM menuSection where ID = ?', req.params.id)
        ]);
        res.send( {MenuSection});
    } catch (err) {
        next(err);
    }
});

// To Add a new Menu Section
router.put('/menusection', async (req, res, next) => {
    try {
        const newSection = req.body.name
        const db = await dbPromise;
        const [menusection_by_ID] = await Promise.all([
            db.all('INSERT INTO menuSection(name) VALUES (?)', newSection)
        ]);
        const [MenuSection] = await Promise.all([
            db.all('SELECT * FROM menuSection where name = ?',newSection)
        ]);
        res.send({'success':true,MenuSection});
    } catch (err) {
        next(err);
    }
});

// To Update/Modify the Menu Sections by ID
router.post('/menusection/:id', async (req, res, next) => {
    try {
        const newSection = req.body.name
        const db = await dbPromise;
        const [menusection_by_ID] = await Promise.all([
            db.all('UPDATE menuSection SET name= ? WHERE id = ?', newSection,req.params.id)
        ]);
        const [MenuSection] = await Promise.all([
            db.all('SELECT * FROM menuSection where name = ?',newSection)
        ]);
        console.log(typeof MenuSection)
        if (Object.keys(MenuSection).length ==0){
            res.send({'No Update':'No such item id to update in Menu Section'});
        }else {
            res.send({'success': true, MenuSection});
        }
    } catch (err) {
        next(err);
    }
});

// To Delete the Menu Sections by ID
router.delete('/menusection/:id', async (req, res, next) => {
    try {
        const newSection = req.body.name
        const db = await dbPromise;
        const [MenuSection] = await Promise.all([
            db.all('DELETE FROM menuSection WHERE id = ?',req.params.id)
        ]);
        res.send({'success':true});
    } catch (err) {
        next(err);
    }
});


module.exports = router;
