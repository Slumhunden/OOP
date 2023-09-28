function construct(){
    const listRenderer = {
        render(){
            const html = /*html*/ `
    <tr>
      <td>${member.name}</td>
      <td>${member.active}</td>
      <td>${member.birthday.toLocaleString("da-DK", {
        dateStyle: "medium",
      })}</td>
      <td>${member.age}</td>
      <td>${member.junior}</td>
      <td>${member.email}</td>
    </tr>`;
    return html;
        }
    };

}