import MainLayout from "@/Layouts/MainLayout";
import DetailBlog from "../Blog/DetailBlog";
import CommentSection from "./Part/Komentar";

export default function Detail({ auth, blog, comments }) {
    return (
        <MainLayout auth={auth}>
            <DetailBlog blog={blog} />
            <CommentSection
                comments={comments}
                onReply={(commentId, content) => {}}
                onLike={(commentId) => {}}
                onEdit={(commentId, newContent) => {}}
                onDelete={(commentId) => {}}
                depth={0}
            />
        </MainLayout>
    );
}