import Swal from "sweetalert2";

export const AlertNotify = (props) => {
  const notification = () => {
    Swal.fire({
      title: props.title,
      text: props.text,
      icon: "success",
      confirmButtonText: "OK",
    });
  };
  notification();
};
