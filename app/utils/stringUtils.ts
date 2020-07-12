export const getInitials = (name: string) => {
  let initials = Array.prototype.map
    .call(name.split(' '), function (x) {
      return x.substring(0, 1).toUpperCase();
    })
    .join('');
  return initials.substring(0, 2);
};
