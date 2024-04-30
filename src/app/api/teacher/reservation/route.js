import { post } from "@/functions/fetch";

export async function POST(request, { params }) {
  const body = await request.json();
  const res = await post(`/teacher/create-reservation`, body, request.headers);
  const { data, status, headers } = res;
  // Handle the response status code
  if (status >= 200 && status < 300) {
    return Response.json(data, { status, headers });
  } else {
    // Error response
    return Response.json(
      { error: data.error, status },

      {
        status,
        headers,
      }
    );
  }
}
