// use this javascript to load database with test data
//
//  Usage:
//        $ mongo localhost:27017/test load_test_data.js

function makeUser()
{
  var a = ["alice", "bob", "lynn", "peter", "mike", "dick"];
  var b = ["1", "2", "3", "4", "5", "6", "7", "8" ,"9"];
  var c = ["@google.com", "@yahoo.com", "@hotmail.com"];

  var indA = Math.floor(Math.random()*a.length);
  var indB = Math.floor(Math.random()*b.length);
  var indC = Math.floor(Math.random()*b.length);
  var indD = Math.floor(Math.random()*c.length);
  var name = a[indA] + b[indB] + b[indC] + c[indD];
  return name;
}

function makeHobby()
{
  var a = ["squash", "tennis", "basketball", "rock climbing", "swimming","reading","writing", "programming", "math", "tutoring"];
  var rA = Math.floor(Math.random()*a.length);
  var hobby = [];
  hobby.push(a[rA]);
  a.splice(rA,1);
  rA = Math.floor(Math.random()*a.length);
  hobby.push(a[rA]);
  return hobby;
}

function makeAllowance()
{
  var cash = [10, 20, 30, 40, 50, 60, 70, 80, 90];

  var rA = Math.floor(Math.random()*cash.length);
  var money = cash[rA];
  return money;
}

// benchmark execution time
var t0 = new Date().getTime();
// total iteration
var totalIter = 10
// bulk number
var bulkNum = 10000

db.users.drop()
var seq=1;
for(var i = 0; i < totalIter; i++){
  var tThisLoop = new Date().getTime();
  for (var j = 0; j < bulkNum; j++) {
    userDoc = [];
    // make random password of 8 character length
    var randomstring = Math.random().toString(36).slice(-8);
    u_name  = makeUser();
    u_hobby = makeHobby();
    u_money   = makeAllowance();
    //print(insertSeq);
    userDoc.push({
                    username : u_name,
                    password : randomstring,
                    hobby: u_hobby,
                    allowance: u_money,
                    inserted_at: seq
                  });
    seq++;
    if( u_hobby[0] == u_hobby[1]){
      print("gotcha")
    };
    db.users.insert(userDoc)
  };
  // gather stats
  var t1 = new Date().getTime();
  print("\nScript subtotal runtime => " + (t1 - t0) + " ms. Completion:" + (Math.round(seq/(totalIter*bulkNum)*100)) + "%" )
  print("  10000 documents inserted, takes " + (t1 - tThisLoop) + " ms");
};

//print final stat
var t1 = new Date().getTime();
print("Script total runtime => " + (t1 - t0) + " ms.")
