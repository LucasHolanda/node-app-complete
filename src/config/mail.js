export default {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
    default: {
        from: 'Equipe GoBarber <noreply@gobarber.com>',
    },
};

/**
 * Servicos de Email
 * - Amazon SES
 * - Mailgun
 * - Sparkpost
 * - Mandril (Mailchimp)
 * - Gmail (Possui limites podendo bloquear)
 * - Mailtrap -> #DEV (Não envia email de verdade, Caixa entrada simulada)
 */
