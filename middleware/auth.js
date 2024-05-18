const auth = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ success: false, message: "No token, authorization denied" });
    }

    // Giả sử bạn có một hàm để kiểm tra token
    try {
        const decoded = verifyToken(token); // Hàm này cần được định nghĩa để kiểm tra token
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ success: false, message: "Token is not valid" });
    }
};

export default auth;
