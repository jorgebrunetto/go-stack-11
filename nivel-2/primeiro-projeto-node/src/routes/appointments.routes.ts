import { Router } from "express";
import { parseISO } from "date-fns";
import AppointmentsRepository from "../repositories/AppointmentsRepository";
import CreateAppointmentsService from "../services/CreateAppointmentService";
const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

//Rota: Receber a requisição, chamar outro arquivo, devolver uma resposta.

appointmentsRouter.get("/", (req, res) => {
  const appointments = appointmentsRepository.all();
  res.json(appointments);
});
// não é necessario passar a rota pois ja esta chamnado no pai
appointmentsRouter.post("/", (req, res) => {
  try {
    const { provider, date } = req.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentsService(
      appointmentsRepository
    );
    const appointment = createAppointment.execute({
      date: parsedDate,
      provider,
    });

    return res.json(appointment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default appointmentsRouter;
