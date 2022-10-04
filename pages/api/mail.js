export default (req, res) => {
    const data = JSON.parse(req.body);
    console.log(data);
    res.status(200).json({ status: "Ok" });
}