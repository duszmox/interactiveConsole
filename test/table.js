

const table = (require("../lib/table.js")).table;


exports.tableTest=function(){
    global.nanoTest.add(
        "table",
        {
            "function":table,
            "options":[[
                ["testcolumA", "testcolumB", "testcolumC"], 
                ["A0", "B0", "C0"], 
                ["A1", "B1", "C1"], 
                ["A2", "B2", "C2"]
            ]]
        },
        "j==",
        [
             "┌──────────┬──────────┬──────────┐",
             "│\u001b[1mtestcolumA\u001b[0m│\u001b[1mtestcolumB\u001b[0m│\u001b[1mtestcolumC\u001b[0m│",
             "├──────────┼──────────┼──────────┤",
             "│    A0    │    B0    │    C0    │",
             "├──────────┼──────────┼──────────┤",
             "│    A1    │    B1    │    C1    │",
             "├──────────┼──────────┼──────────┤",
             "│    A2    │    B2    │    C2    │",
             "└──────────┴──────────┴──────────┘"
        ]
    );
};
