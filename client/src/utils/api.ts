export function request({
  query,
  onSuccess,
  onError,
}: {
  query: string;
  onSuccess?: (response: any) => void;
  onError?: (response: any) => void;
}) {
  var xhr = new XMLHttpRequest();

  xhr.open("POST", "/graphql");
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.send(
    JSON.stringify({
      query,
    })
  );

  xhr.onload = () => {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.response);
      onSuccess?.(response);
    }
    if (xhr.status >= 500) {
      onError?.(response);
    }
  };
}
