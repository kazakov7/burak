console.log("Users frontend javascript file");
$(function () {
  $(".member-status").on("change", function (e) {
    const id = e.target.id;
    const memberStatus = $(`#${id}.member-status`).val();

    axios
      .post("/admin/user/edit", {
        _id: id,
        memberStatus: memberStatus,
      })
      .then((response) => {
        console.log("response", response);
        const result = response.data;
        if (result.data) {
          console.log("User updated");
          $(".member-status").blur();
        } else {
          alert("update is failed");
        }
      })
      .catch((err) => {
        console.log("update is failed");
      });
  });
});
