import styles from "@/styles/blog/Index.module.scss";
import CustomLink from "@/components/CustomLink";

function AllBlogs({blogs}){
    return(
        <div className={styles.blogs}>
            {blogs.map(blog => (
                <div key={blog.id} className={styles.blog}>
                    <div className={styles.blog_thumbnail_wrapper}>
                        <img src={`/images/techtalk/${blog.bgImage}`} alt={blog.title}
                             className={styles.blog_thumbnail} />
                    </div>

                    <CustomLink className={styles.blog_tag} href={'blogs/'+blog.slug}>
                        {blog.tags}
                    </CustomLink>

                    <h3 className="">
                        <CustomLink className={styles.blog_title} href={'blogs/'+blog.slug}>
                            {blog.title}
                        </CustomLink>
                    </h3>

                    <p className={styles.blog_date}>
                        Usman Muhammad . {blog.created_at}
                    </p>

                </div>
            ))}
        </div>
    )
}


export default AllBlogs