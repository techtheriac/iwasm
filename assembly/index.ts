// Allocate two pages of memory to a web assembly process - a page being 64kb
memory.grow(2);
// Store an unsigned 8bit integer at index 0
store<u8>(0, 21);
// Store an unsigned 8bit integer at index 1
store<u8>(1, 99);

export function readMemory(n: i32) :i32 {
  // read an unsigned 8bit integer at index `n`
  return load<u8>(n);
}