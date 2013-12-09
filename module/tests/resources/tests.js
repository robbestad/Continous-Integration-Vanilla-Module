test( "hello test", function() {
    ok( 1 == "1", "Passed!" );
});

test( "a basic test example", function() {
      var value = "hello";
      equal( value, "hello", "We expect value to be hello" );
});

/*
// basic true
test( "ok test", function() {
  ok( true, "true succeeds" );
  ok( "non-empty", "non-empty string succeeds" );
  ok( false, "false fails" );
  ok( 0, "0 fails" );
  ok( NaN, "NaN fails" );
  ok( "", "empty string fails" );
  ok( null, "null fails" );
  ok( undefined, "undefined fails" );
});
*/

/*
// equal
 test( "equal test", function() {
 equal( 0, 0, "Zero; equal succeeds" );
 equal( "", 0, "Empty, Zero; equal succeeds" );
 equal( "", "", "Empty, Empty; equal succeeds" );
 equal( 0, 0, "Zero, Zero; equal succeeds" );

 equal( "three", 3, "Three, 3; equal fails" );
 equal( null, false, "null, false; equal fails" );
 });
*/

/*
//deepequal (===)
 test( "deepEqual test", function() {
 var obj = { foo: "bar" };

 deepEqual( obj, { foo: "bar" }, "Two objects can be the same in value" );
 });
 */