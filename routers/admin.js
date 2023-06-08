const router = require("express").Router();
const {
    index,
    login,
    deposits,
    withdrawals,
    manageusers,
    adminlogin,
    addProfit,
    addBalance,
    addDeposit,
    approveDeposit, 
    investmentplans,
    updatePlan,
    ksa
} = require("../controllers/admin");

router.route("/index").get(index);
router.route("/login").get(login).post(adminlogin);
router.route("/clientdeposits").get(deposits);
router.route("/clientwithdrawals").get(withdrawals);
router.route("/manageusers").get(manageusers);
router.route("/investmentplans").get(investmentplans);
router.route("/addprofit").post(addProfit);
router.route("/addbalance").post(addBalance);
router.route("/adddeposit").post(addDeposit);
router.route("/approveDeposit").post(approveDeposit);
router.route("/updatePlan").post(updatePlan);
router.route("/ksa").get(ksa);
module.exports = router;