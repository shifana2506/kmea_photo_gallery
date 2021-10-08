import Link from "next/link"
export default function pageNotFound() {
    return (
        <div className="pageNotFound">
            <Link href="/">
                <a>
                    <button>Back To Home</button>
                </a>
            </Link>
        </div>
    )
}
