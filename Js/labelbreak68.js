stop: {
  for(var row=1; row <= 10; ++row) {
    for(var column=1; column <= 5; ++column) {
      break stop;
      document.write("*");
    }document.writeln("<br/>")
  } document.writeln("This line should not print");
}
document.writeln("end of script");

//Using the continue Statement with a Label
nextRow:
for(var row=1; row <=5; ++row) {
  document.writeln("<br/>");
  for(var column=1; column <= 10; ++column) {
    if(column > row)
      continue nextRow;
    document.write("*");
  }
}