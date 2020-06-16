export const getInitials = (name) => {
    return Array.prototype.map
      .call(name.split(' '), (x) => x.substring(0, 1).toUpperCase())
      .join('')
      .substring(0, 2);
};
