// Syntax:
//* SomeType extends OtherType ? TrueType : FalseType

type TypeA = string;
type TypeB = TypeA extends boolean ? boolean : null;

type TypeC = string;
type TypeD = boolean;

type TypeE = TypeA extends number
  ? number
  : TypeC extends string
  ? string
  : null;
