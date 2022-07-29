const User = require("../models/User");
const UserTeam = require("../models/UserTeam");

module.exports = () => {
  const fetch = () => {
    return new Promise(function (resolve, reject) {
      let orm = User.aggregate([
        {
          $lookup: {
            from: "userteams",
            localField: "email",
            foreignField: "email",
            as: "userteam",
          },
        },

        // {
        //   $replaceRoot: {
        //     newRoot: {
        //       $mergeObjects: [{ $arrayElemAt: ["$userteam", 0] }, "$$ROOT"],
        //     },
        //   },
        // },
        // { $project: { userteam: 0 } },

        {
          $project: {
            "userteam.team_name": 1,
            full_name: 1,
            email: 1,
            number: 1,
            city: 1,
            url: 1,
          },
        },

        { $unwind: "$userteam" },
      ]);

      orm.then(resolve).catch(reject);
    });
  };

  return {
    fetch,
  };
};
