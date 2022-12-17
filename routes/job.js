const Job = require("../models/Job");

const router = require("express").Router();

//CREATE

router.post("/", async (req, res) => {
    const newJob = new Job(req.body);

    try {
        const addedJob = await newJob.save();
        res.status(200).send(addedJob);
    } catch (err) {
        res.status(500).send(err);
    }
});



//GET ALL JOBS
router.get("/", async (req, res) => {
    const jobs  = await Job.find({})

    res.send(jobs)
});

//GET ALL JOBS by Language

router.get("/:q", async (req, res) => {
    const { q } = req.params;

    try{
        const job = await Job.find({
            language : q
        })

        res.status(200).send(job);
    }catch(err){
        res.status(401).send(err)
    }
});



module.exports = router;
