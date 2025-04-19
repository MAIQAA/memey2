"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var nodemailer_1 = require("nodemailer");
var cors_1 = require("cors");
var express_rate_limit_1 = require("express-rate-limit");
var sanitize_html_1 = require("sanitize-html");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var app = (0, express_1.default)();
var port = process.env.PORT || 5000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Rate limiting (100 requests per 15 minutes per IP)
var limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    message: "Too many requests from this IP, please try again later.",
});
app.use("/api/contact", limiter);
// Email transporter configuration
var transporter = nodemailer_1.default.createTransport({
    service: "Gmail", // Replace with your SMTP service if needed
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
// API endpoint to send email
app.post("/api/contact", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, phone, subject, message, honeypot, sanitizedName, sanitizedEmail, sanitizedPhone, sanitizedSubject, sanitizedMessage, mailOptions, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, email = _a.email, phone = _a.phone, subject = _a.subject, message = _a.message, honeypot = _a.honeypot;
                // Check honeypot for spam
                if (honeypot) {
                    return [2 /*return*/, res.status(400).json({ message: "Spam detected." })];
                }
                // Validate required fields
                if (!name || !email || !message) {
                    return [2 /*return*/, res.status(400).json({ message: "Name, email, and message are required." })];
                }
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    return [2 /*return*/, res.status(400).json({ message: "Invalid email format." })];
                }
                sanitizedName = (0, sanitize_html_1.default)(name, { allowedTags: [], allowedAttributes: {} });
                sanitizedEmail = (0, sanitize_html_1.default)(email, { allowedTags: [], allowedAttributes: {} });
                sanitizedPhone = phone ? (0, sanitize_html_1.default)(phone, { allowedTags: [], allowedAttributes: {} }) : "";
                sanitizedSubject = subject ? (0, sanitize_html_1.default)(subject, { allowedTags: [], allowedAttributes: {} }) : "";
                sanitizedMessage = (0, sanitize_html_1.default)(message, { allowedTags: [], allowedAttributes: {} });
                mailOptions = {
                    from: "\"MeMeY Contact\" <".concat(process.env.EMAIL_USER, ">"),
                    to: process.env.RECIPIENT_EMAIL || "support@memey.cloud",
                    replyTo: sanitizedEmail,
                    subject: sanitizedSubject || "New Contact Form Submission from ".concat(sanitizedName),
                    text: "\n      Name: ".concat(sanitizedName, "\n      Email: ").concat(sanitizedEmail, "\n      ").concat(phone ? "Phone: ".concat(sanitizedPhone) : "", "\n      ").concat(subject ? "Subject: ".concat(sanitizedSubject) : "", "\n      Message: ").concat(sanitizedMessage, "\n    "),
                    html: "\n      <h2>New Contact Form Submission</h2>\n      <p><strong>Name:</strong> ".concat(sanitizedName, "</p>\n      <p><strong>Email:</strong> ").concat(sanitizedEmail, "</p>\n      ").concat(phone ? "<p><strong>Phone:</strong> ".concat(sanitizedPhone, "</p>") : "", "\n      ").concat(subject ? "<p><strong>Subject:</strong> ".concat(sanitizedSubject, "</p>") : "", "\n      <p><strong>Message:</strong> ").concat(sanitizedMessage, "</p>\n    "),
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, transporter.sendMail(mailOptions)];
            case 2:
                _b.sent();
                res.status(200).json({ message: "Message sent successfully!" });
                console.log("Email sent successfully!");
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                console.error("Error sending email:", error_1);
                res.status(500).json({ message: "Failed to send message." });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// Start server
app.listen(port, function () {
    console.log("Server running on http://localhost:".concat(port));
});
