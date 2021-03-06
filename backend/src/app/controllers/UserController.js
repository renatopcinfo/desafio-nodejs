import * as Yup from 'yup';
import User from '../models/User';
import Phone from '../models/Phone';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Informe todos os campos' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'E-mail já existente' });
    }

    const { id, name, createdAt, updatedAt, last_login } = await User.create(
      req.body
    );

    return res.json({
      id,
      name,
      createdAt,
      updatedAt,
      last_login,
    });
  }
}

export default new UserController();
